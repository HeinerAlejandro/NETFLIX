FROM python:3.8-slim-bullseye

MAINTAINER heiner.enis@gmail.com

ENV PYTHONUNUNBUFFERED 1

WORKDIR /netflix/backend

RUN mkdir assets

COPY requirements.txt .

COPY ./config ./config

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY . .

RUN python manage.py collectstatic --no-input
CMD ["sh", "./entrypoint.sh"]
