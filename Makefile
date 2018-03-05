dev:
	open -a Atom .
	npm run webpack
	open index.html
	npm run webpack -- --watch
	# sass --watch ./assets/styles/styles.scss:./assets/styles/styles.css

watch:
	npm run webpack -- --watch
	# sass --watch ./assets/styles/styles.scss:./assets/styles/styles.css
