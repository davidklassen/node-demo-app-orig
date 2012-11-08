REPORTER=spec

test:
	@./node_modules/.bin/mocha \
		--require should \
		--bail \
		--reporter $(REPORTER) \
		tests
		
.PHONY: test

