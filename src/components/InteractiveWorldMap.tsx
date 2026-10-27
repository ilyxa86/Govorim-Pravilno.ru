import world from "@/assets/world-countries.json";

type Feature = {
  properties?: { iso_a3?: string; iso_a3_eh?: string; name_ru?: string; name?: string };
  geometry: { type: string; coordinates: unknown };
};

const clientCountries = {
  RUS: { name: "Россия", point: [37.62, 55.75] },
  DEU: { name: "Германия", point: [10.45, 51.17] },
  NOR: { name: "Норвегия", point: [8.47, 60.47] },
  SWE: { name: "Швеция", point: [18.64, 60.13] },
  FRA: { name: "Франция", point: [2.21, 46.23] },
  GBR: { name: "Англия", point: [-1.5, 52.8] },
  USA: { name: "США", point: [-98.58, 39.83] },
  NLD: { name: "Нидерланды", point: [5.29, 52.13] },
  SGP: { name: "Сингапур", point: [103.82, 1.35] },
  ARE: { name: "ОАЭ", point: [53.85, 23.42] },
  MNE: { name: "Черногория", point: [19.37, 42.71] },
} as const;

export type ClientCode = keyof typeof clientCountries;
const width = 1200;
const height = 620;

function countryCode(feature: Feature) {
  const properties = feature.properties ?? {};
  const iso = properties.iso_a3_eh && properties.iso_a3_eh !== "-99" ? properties.iso_a3_eh : properties.iso_a3;
  if (iso && iso in clientCountries) return iso as ClientCode;
  const aliases: Record<string, string> = { Norway: "NOR", "Норвегия": "NOR", France: "FRA", "Франция": "FRA" };
  return (aliases[properties.name ?? ""] ?? aliases[properties.name_ru ?? ""] ?? "") as ClientCode | "";
}

function project(point: number[]) {
  return [((point[0] + 180) / 360) * width, ((90 - point[1]) / 180) * height];
}

function ringPath(ring: number[][]) {
  return ring.map((point, index) => {
    const [x, y] = project(point);
    const previous = ring[index - 1];
    const crossesDateLine = previous && Math.abs(point[0] - previous[0]) > 180;
    return `${index && !crossesDateLine ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(" ") + " Z";
}

function featurePath(feature: Feature) {
  const { type, coordinates } = feature.geometry;
  if (type === "Polygon") return (coordinates as number[][][]).map(ringPath).join(" ");
  if (type === "MultiPolygon") return (coordinates as number[][][][]).flat().map(ringPath).join(" ");
  return "";
}

type InteractiveWorldMapProps = {
  activeCode: ClientCode | null;
  onActiveCodeChange: (code: ClientCode | null) => void;
};

export function InteractiveWorldMap({ activeCode, onActiveCodeChange }: InteractiveWorldMapProps) {
  const features = (world as { features: Feature[] }).features;
  const activeCenter = activeCode ? project([...clientCountries[activeCode].point]) : null;

  return (
    <div className="relative overflow-hidden rounded-lg bg-white/80 p-1 sm:p-2">
      <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label="Интерактивная карта клиентов по всему миру" className="block h-auto w-full">
        <rect width={width} height={height} fill="transparent" />
        <g stroke="white" strokeWidth="0.8" strokeLinejoin="round">
          {features.map((feature, index) => {
            const code = countryCode(feature);
            const isClient = Boolean(code);
            const isActive = activeCode === code;
            return (
              <path
                key={`${code}-${index}`}
                d={featurePath(feature)}
                fill={isActive ? "#65BCE9" : isClient ? "#9FD8F4" : "#D9DDE1"}
                className={isClient ? "cursor-pointer transition-colors duration-150 hover:fill-[#65BCE9]" : "pointer-events-none"}
                onMouseEnter={isClient ? () => onActiveCodeChange(code) : undefined}
                onFocus={isClient ? () => onActiveCodeChange(code) : undefined}
                onClick={isClient ? () => onActiveCodeChange(isActive ? null : code) : undefined}
                tabIndex={isClient ? 0 : -1}
                aria-label={isClient ? clientCountries[code].name : undefined}
                style={{ outline: "none" }}
              />
            );
          })}
        </g>
        {Object.entries(clientCountries).map(([code, country]) => {
          const [cx, cy] = project([...country.point]);
          const isActive = activeCode === code;
          return (
            <g
              key={code}
              role="button"
              tabIndex={0}
              aria-label={country.name}
              className="cursor-pointer outline-none"
              onMouseEnter={() => onActiveCodeChange(code as ClientCode)}
              onFocus={() => onActiveCodeChange(code as ClientCode)}
              onClick={() => onActiveCodeChange(isActive ? null : code as ClientCode)}
            >
              <circle cx={cx} cy={cy} r="13" fill="#F58A3C" opacity={isActive ? "0.32" : "0.18"} />
              <circle cx={cx} cy={cy} r={isActive ? "7" : "6"} fill={isActive ? "#E76F1F" : "#F58A3C"} stroke="white" strokeWidth="2.5" />
            </g>
          );
        })}
        {activeCode && activeCenter && (
          <g pointerEvents="none">
            <rect x={activeCenter[0] - 56} y={Math.max(8, activeCenter[1] - 34)} width="112" height="26" rx="13" fill="hsl(var(--foreground))" opacity="0.94" />
            <text x={activeCenter[0]} y={Math.max(25, activeCenter[1] - 16)} textAnchor="middle" fill="hsl(var(--background))" fontSize="14" fontWeight="600">
              {clientCountries[activeCode].name}
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}
