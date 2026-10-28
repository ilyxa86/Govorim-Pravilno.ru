#!/usr/bin/env bash
# Lädt den Ordner dist/ auf das REG.RU-Hosting hoch (per SFTP).
set -u
H="${REGRU_HOST#*://}"; H="${H%%/*}"; H="${H%%:*}"; H="$(echo "$H" | tr -d '[:space:]')"
ZIEL="${REGRU_PATH:-www/govorim-pravilno.ru}"
B="${BATCH_FILE:-sftp-batch.txt}"
: > "$B"
echo "cd $ZIEL" >> "$B"
(cd dist && find . -mindepth 1 -type d | sed 's#^\./##' | sort) | while IFS= read -r d; do echo "-mkdir \"$d\"" >> "$B"; done
(cd dist && find . -type f | sed 's#^\./##') | while IFS= read -r f; do echo "put \"dist/$f\" \"$f\"" >> "$B"; done
echo "bye" >> "$B"
echo "Befehle im Upload: $(wc -l < "$B")"
echo "--- erste Befehle:"; head -5 "$B"
timeout 840 sshpass -p "$REGRU_PASSWORD" sftp -oStrictHostKeyChecking=no -oConnectTimeout=20 -b "$B" "$REGRU_USER@$H" > "${LOG_FILE:-sftp-upload.log}" 2>&1
rc=$?
echo "sftp exit code: $rc"
sed "s#$H#HOST#g" "${LOG_FILE:-sftp-upload.log}" | tail -30
exit $rc
