ARG MYSQL_VERSION

FROM mysql:${MYSQL_VERSION}

ENV MYSQL_ROOT_PASSWORD=rootpassword

COPY customers.csv /tmp/
COPY accounts.csv /tmp/
COPY account_ownership.csv /tmp/
COPY transactions.csv /tmp/
COPY contacts.csv /tmp/

ADD setup.sql /docker-entrypoint-initdb.d/

ENTRYPOINT [ "docker-entrypoint.sh", "--default-authentication-plugin=mysql_native_password", "--secure-file-priv=/tmp/" ]
