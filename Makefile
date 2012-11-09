REPORTER=spec
TESTS=$(shell find ./tests -type f -name "*.js")

test:
	@./node_modules/.bin/mocha \
		--require should \
		--reporter $(REPORTER) \
		$(TESTS)
		
.PHONY: test

