brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js	

install-deps:
	npm ci

lint:
	npx eslint .

publish:
	npm publish --dry -run