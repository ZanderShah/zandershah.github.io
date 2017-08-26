awk -F, '{OFS=",";print $1,$2,$4,$21,$22,$23,$24,$25}' ZSHAH-7949595-runs.csv > sw-runs.csv
sudo -u zander psql -d zander -a -f ./server/reset.sql