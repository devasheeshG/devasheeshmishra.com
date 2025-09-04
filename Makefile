SERVICE_NAME = resume-website

.PHONY: build up down logs shell clean git_pull deploy

# ----------Production commands (Docker)----------
build:
	docker compose build

up:
	docker compose up -d

down:
	docker compose down

logs:
	docker compose logs -f

shell:
	docker compose exec $(SERVICE_NAME) /bin/bash

git_pull:
	git pull origin main

deploy: down git_pull build up logs
	@echo "Deployment complete"
