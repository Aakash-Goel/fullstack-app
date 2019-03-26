# Contributing

If you're reading this, you're awesome! Thank you for helping us make this project great and being a part of the Fullstack-App community. Here are a few guidelines that will help you along the way.

## Submitting a pull request

Fullstack-App is a community project, so pull requests are always welcome, but, before working on a large change, it is best to open an issue first to discuss it with the maintainers.

When in doubt, keep your pull requests small. To give a PR the best chance of getting accepted, don't bundle more than one feature or bug fix per pull request. It's always best to create two smaller PRs than one big one.

As with issues, please begin the title with `[Bug | <ComponentName> | <Subject>]`.

When adding new features or modifying existing, please attempt to include tests to confirm the new behaviour. You can read more about our test setup in our test [README](https://github.com/Aakash-Goel/fullstack-app/tree/master/client/README.md).

### Branch Structure

At any given time, `develop` represents the latest development version.
Patches or hotfix releases are prepared on an independent branch.

#### `develop` is a default branch

We will do our best to keep `develop` in good shape, with tests passing at all times.
However, in order to move fast, we will make API changes that your application might not be compatible with.

#### `master` is safe

`master` branch will always have stable and working code.
Whenever, `develop` is in good shape and maitainers merge the code into `develop`, will push the same changes into `master` branch.

### How to increase the chance of being accepted?

We will only accept a pull request for which all tests pass. Make sure the following is true:
- The branch is targeted at:
  - `master` for important fixes only.
  - `develop` for everything else including breaking changes.
- The branch is not behind its target.
- If a feature is being added:
   - If the result was already achievable with the core library, explain why this
      feature needs to be added to the core.
   - It includes relevant tests.
   - If this is a common use case, considered adding an example to the documentation.
- If a bug is being fixed, test cases that fail without the fix are included.
- The code is formatted (run `npm run format`).
- The code is linted (run `npm run lint`).
- The PR title follows the pattern `[<Type> | <Scope> | <Subject>]`.
- The commit messages should follow the conventional commits. (See: [How to Write a Conventional Git Commit Message](https://www.conventionalcommits.org/en/v1.0.0-beta.3/) for a great explanation)

## Getting started

Please create a new branch from an up to date master on your fork.

1. Fork the Fullstack-App repository on Github
2. Clone your fork to your local machine `git clone git@github.com:<yourname>/fullstack-app.git`
3. Create a branch `git checkout -b my-topic-branch`
4. Make your changes, lint, then push to to GitHub with `git push --set-upstream origin my-topic-branch`.
5. Visit GitHub and make your pull request.

If you have an existing local repository, please update it before you start, to minimise the chance of merge conflicts.
```sh
git remote add upstream git@github.com:Aakash-Goel/fullstack-app.git
git checkout develop
git pull upstream develop
git checkout -b my-topic-branch
npm install
```

### Coding style

Please follow the coding style of the project. Fullstack-App uses eslint with prettier, so if possible, enable linting in your editor to get real-time feedback. The linting rules can be run manually with the following command `npm run lint`.

You can also run `npm run format` to reformat the code.

Finally, when you submit a pull request, they are run again by Travis CI, but hopefully by then your code is already clean!

## License

By contributing your code to the Fullstack-App GitHub repository, you agree to license your contribution under the MIT license.
