# Makefile
install: # установить зависимости
	npm i

brain-games: # Запуск игры
	node bin/brain-games.js

brain-even: # Запуск игры
	node bin/brain-even.js

brain-calc: # Запуск игры
	node bin/brain-calc.js

brain-gcd: # Запуск игры
	node bin/brain-gcd.js

brain-progression: # Запуск игры
	node bin/brain-progression.js

publish: # Публикация проекта
	npm publish --dry-run

lint: # Проверка eslint
	npx eslint .

#test-coverage:
	#npm test -- --coverage --coverageProvider=v8
