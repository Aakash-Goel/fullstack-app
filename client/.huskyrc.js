const commitmsg = `
# Hey there!
#
# We just wanted to let you know that we care a great deal about
# making our git history clean, maintainable and easy to access for
# all our contributors. Commit messages are very important to us,
# which is why we have a strict commit message policy in place.
# Please use the following guidelines to format all your commit
# messages:
#
#     <type>: <subject>
#     <type>(<scope>): <subject>
#
# Please note that:
#  - The HEADER is a single line of max. 50 characters that
#    contains a succinct description of the change. It contains a
#    type, an optional scope, and a subject
#       + <type> describes the kind of change that this commit is
#                providing. Allowed types are:
#             * build
#             * ci
#             * chore (maintain)
#             * docs (documentation)
#             * feat (feature)
#             * fix (bug fix)
#             * perf (performance)
#             * refactor
#             * revert
#             * style (formatting, missing semicolons, …)
#             * test (when adding missing tests)
#       + <scope> can be anything specifying the place of the commit
#                 change
#       + <subject> is a very short description of the change, in
#                   the following format:
#             * imperative, present tense: “change” not
#               “changed”/“changes”
#             * no capitalised first letter
#             * no dot (.) at the end
#
# Examples:
#   - fix: feature name bug fix
#   - feat(feature-name) feature added
#
# Thank you!
`;

module.exports = {
  hooks: {
    'pre-commit': `lint-staged && echo \"${commitmsg}\"`,
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'pre-push': 'npm run test:coverage',
  },
};
