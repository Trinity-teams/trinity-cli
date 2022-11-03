# Trinity-ui-cli [![Main action](https://github.com/DevTeams-Inc/trinity-cli/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/DevTeams-Inc/trinity-cli/actions/workflows/main.yml)

Trinity-ui-cli is a command line interface for Trinity-ui. It is a tool for developers to create and manage their own Trinity-ui projects.

## Installation

```bash
npm install -g trinity-ui-cli
```

## Usage and Commands

### Create a new project with trinity-ui

```bash
trinity-ui-cli -g || trinity-ui-cli --generate
```

## Project Structure

- `bin` - Contains the executable file for the project.
  - `functions` - Contains the functions for the project.
  
- `.github` -- Contains the github actions workflow file.

## Contribution

If you want to contribute to the library you can create a branch in the repository and send a pull request. Remember create great unit tests and documentation updates.

### Branches

Remember usage this structure:

- `feature/[name]`
- `fix/[name]`
- `bug/[name]`

### Report an issuer

If you have an issue or a problem with the library you can report it in the [issues](https://github.com/DevTeams-Inc/trinity-cli/issues)

## License

[MIT](./LICENSE)
