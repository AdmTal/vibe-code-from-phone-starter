.PHONY: build build-offline itch-zip clean

build:
	npm run build

build-offline:
	npm run build:offline

itch-zip: build-offline
	cd dist-offline && zip -r ../game.zip .

clean:
	rm -rf dist dist-offline game.zip
