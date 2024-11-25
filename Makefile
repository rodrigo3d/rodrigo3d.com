.DEFAULT_GOAL := help

# Available commands and their descriptions
help:
	@echo "Usage: make [command]"
	@echo ""
	@echo "Available commands:"
	@echo "  install        Install dependencies"
	@echo "  reinstall      Reinstall the entire application"
	@echo "  build          Build the project"
	@echo "  deploy         Deploy the project"
	@echo "  change         Execute changes"
	@echo ""

# Command to install dependencies
install:
	@echo "Installing dependencies..."
	npm install # or yarn install

# Command to reinstall the application
reinstall:
	@echo "Reinstalling the application..."
	rm -rf node_modules
	pnpm install # or yarn install

# Command to build the project
build:
	@echo "Building the project..."
	# Add your project build command here

# Command to deploy the project
deploy:
	@echo "Deploying the project..."
	# Add your project deploy command here

# Command to execute changes
.PHONY : change
change:
	@echo "Executing changes..."
	# Add your command to execute changes here