# Seed test data 

`docker exec -i health-tracker-mongo sh -c 'mongoimport -c weight-entry -d health-tracker --drop --jsonArray' < {GIT_REPO_ROOT}/api/src/main/resources/seed/entries.json`