FROM python:3.11.3

ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY ./requirements.txt ./

RUN pip install -r requirements.txt

COPY ./ ./

CMD [ "python","manage.py","runserver","cbafly.up.railway.app" ]