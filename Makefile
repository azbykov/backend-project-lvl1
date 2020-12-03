# Makefile
install: # установить зависимости
	npm i

brain-games: # Запуск игры
	node bin/brain-games.js

publish: # Публикация проекта
	npm publish --dry-run

lint: # Проверка eslint
	npx eslint .

#test-coverage:
	#npm test -- --coverage --coverageProvider=v8
