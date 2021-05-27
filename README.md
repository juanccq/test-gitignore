# test-gitignore

To delete a file with sensitive information, use the following command:

`git filter-branch --force --index-filter \ "git rm --cached --ignore-unmatch PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA" \ --prune-empty --tag-name-filter cat -- --all`
