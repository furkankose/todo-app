FROM mongo

COPY data.json /data.json

# TODO fix hardcoded cli parameters
CMD mongoimport --uri mongodb://mongodb/case --collection todos --type json --file /data.json --jsonArray