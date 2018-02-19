dev:
	open -a Atom .
	open index.html
	sass --watch ./assets/styles/styles.scss:./assets/styles/styles.css

watch:
	sass --watch ./assets/styles/styles.scss:./assets/styles/styles.css
