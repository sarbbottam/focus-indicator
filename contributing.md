# Contributing to js-ds

✨ Thanks for contributing  ✨

Please note that this project is released with a [Contributor Code of Conduct](code-of-conduct.md). By participating in this project you agree to abide by its terms.

## Conventions

### Pull Request

- Address only one use case in one PR.
- Ensure test compliance
- Keep the PR as short as possible
- Write readable code
- Avoid confusing one liners

### Commit messages

- Please follow [this commit message convention](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines)
- If you like to ease the process, you can use [commitizen](https://github.com/commitizen/cz-cli#conventional-commit-messages-as-a-global-utility)
- Please add [`[ci skip]`](https://docs.travis-ci.com/user/customizing-the-build/#Skipping-a-build) to the commit messages for documentation only changes

## Setup

1. Fork the repo
2. Clone your fork
3. Make a branch for your `feature/bugfix/etc`.
4. Run `npm install` (make sure you have node and npm installed first)
5. Run `npm build` to build the extension
6. [Load the extension](https://developer.chrome.com/extensions/getstarted#unpacked)
7. Commit your changes; [Please follow the commit message convention stated above](#commit-messages)
8. Push your branch to your fork
9. Create a pull request from your branch on your fork to master on this repo
10. Get merged! 🎉 🎊
