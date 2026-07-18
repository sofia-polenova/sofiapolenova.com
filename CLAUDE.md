# sofiapolenova.com — Контекст проекта

Сайт Софьи Полёновой. Next.js 15 (App Router), деплой на GitHub.

## Git — доступ к GitHub
- Remote `origin` — обычный HTTPS-URL без токена (`https://github.com/sofia-polenova/sofiapolenova.com.git`).
- Аутентификация — через macOS Keychain (`git config credential.helper` = `osxkeychain`), токен нигде не хранится в открытом виде.
- ⚠️ Не встраивать personal access token в URL remote'а (`https://ghp_...@github.com/...`) — раньше так и было, убрали из соображений безопасности.
- Если Keychain не помнит токен, при `git push`/`fetch` попросит логин + токен (как пароль) один раз — дальше подхватит сам.
