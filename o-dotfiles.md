<div align="center">

# 🪐 | *Dotfiles*

</div>

---

> [!INFO]
> Репозиторијуми:
>
> **_GitHub_** - [`crnobog69/dotfiles`](https://github.com/crnobog69/dotfiles)
>
> **_BitBucket_** - [`crnobog69/dotfiles`](https://bitbucket.org/crnobog69/dotfiles)
>
> **_SourceHut_** - [`crnobog/dotfiles`](https://git.sr.ht/~crnobog/dotfiles)
>
> **_Codeberg_** - [`crnobog/dotfiles`](https://codeberg.org/crnobog/dotfiles)
>
> **_GitLab_** - [`crnobog/dotfiles`](https://gitlab.com/crnobog/dotfiles)
>
> **_Gitea_** - [`crnobog/dotfiles`](https://gitea.com/crnobog/dotfiles)

Колекција мојих `dotfiles`-а које корстим на **_Arch Linux_**.

## _Подржани програми_

Посетите страницу за [GNU Stow](gnu-stow).

## _Преузимање_

> [!INFO]
> Ускори скиптра за преузимање и ажурирање.

> [!WARNING]
> Прво проверите [**_Компатибилност_**](#компатибилност).

1. Преузмите GNU Stow (Arch Linux):

```bash
sudo pacman -S stow
```

2. Инсталација:

- Скрипта:

```bash
curl -fsSL https://raw.githubusercontent.com/crnobog69/dotfiles/refs/heads/main/install.sh | sh
```

- Или ручно:

```bash
git clone https://github.com/crnobog69/dotfiles.git
```

Или уз [`extra`](https://github.com/crnobog69/extra):

```bash
git clone https://github.com/crnobog69/dotfiles.git && git clone https://github.com/crnobog69/extra.git
```

3. Примена конфигурација:

Све:

```bash
cd ~/.dotfiles
stow .
```

или (једно)

```bash
cd ~/.dofiles
stow zed
```

За прилагођавање `stow .` команде, изменити `.stow-local-ignore`.

## _Компатибилност_

Листа оперативних система који су подржани:

- ### Linux
  > [!INFO]
  > Потпуно подржан. (пожељно користити Arch Linux)

---

- macOS
  > [!INFO]
  > Већина функција је подржана.

---

- Windows
  > [!INFO]
  > Није подржан у потпуности. За Windows посетити [`DotWin`](/dotwin).


## *Пречице* (`cmd`)

Колекцију пречица можете наћи у [`Пречице`](/precice).


## _Слике_

<div align="center">
  <img src="https://raw.githubusercontent.com/crnobog69/dotfiles/main/assets/fastfetch-doom.png" width="800" height="450"/>
  <br>
  <img src="https://raw.githubusercontent.com/crnobog69/dotfiles/main/assets/image-1.png" width="800" height="450"/>
  <br>
  <img src="https://raw.githubusercontent.com/crnobog69/dotfiles/main/assets/image-2.png" width="800" height="450"/>
  <br>
  <img src="https://raw.githubusercontent.com/crnobog69/dotfiles/main/assets/image-3.png" width="800" height="450"/>
</div>

## _Конфигурација рачунара_

| Категорија           | Детаљи                              | Друго                                                                                                         |
| -------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **Процесор**         | AMD Ryzen 7 5700X                   | -                                                                                                             |
| **Графичка карта**   | AMD Radeon RX 6700                  | -                                                                                                             |
| **RAM**              | Kingston 16GB FURY Beast 3200 MHz   | -                                                                                                             |
| **ОС**               | Arch Linux (Garuda Linux)           | Windows 11                                                                                                    |
| **РО**               | KDE Plasma 6.3.0                    | -                                                                                                             |
| **Иконице**          | BeautyLine                          | Прилагођене Papirus-Dark - [Catppuccin Latte Lavender Folders](https://github.com/catppuccin/papirus-folders) |
| **Композитор**       | Wayland                             | -                                                                                                             |
| **Шкољка**           | zsh (Starship, Zoxide, Zinit, Tmux) | fish, bash                                                                                                    |
| **Промт**            | Starship                            | -                                                                                                             |
| **Терминал**         | Kitty                               | Alacritty, Konsole                                                                                            |
| **ИРО**              | VS Codium, VS Code, micro           | Zed                                                                                                           |
| **Менаџер датотека** | Dolphin                             | Thunar                                                                                                        |
| **Прегледач**        | Brave                               | Firefox Developer Edition                                                                                     |

---


#### Репозиторијуми (Dotfiles):

🐙 | [`Github | Репозиторијум`](https://github.com/crnobog69/dotfiles)

🪣 | [`BitBucket | Репозиторијум`](https://bitbucket.org/crnobog69/dotfiles)

🌲 | [`SourceHut | Репозиторијум`](https://git.sr.ht/~crnobog/dotfiles)

🏔️ | [`Codeberg | Репозиторијум`](https://codeberg.org/crnobog/dotfiles)

🦊 | [`GitLab | Репозиторијум`](https://gitlab.com/crnobog/dotfiles)

🍵 | [`Gitea | Репозиторијум`](https://gitea.com/crnobog/dotfiles)

<br>

#### Репозиторијуми (Extra):

🐙 | [`Github | Репозиторијум`](https://github.com/crnobog69/extra)

🪣 | [`BitBucket | Репозиторијум`](https://bitbucket.org/crnobog69/extra)

🌲 | [`SourceHut | Репозиторијум`](https://git.sr.ht/~crnobog/extra)

🏔️ | [`Codeberg | Репозиторијум`](https://codeberg.org/crnobog/extra)

🦊 | [`GitLab | Репозиторијум`](https://gitlab.com/crnobog/extra)

🍵 | [`Gitea | Репозиторијум`](https://gitea.com/crnobog/extra)

<br>

#### Репозиторијуми (dotwin | Windows):

🐙 | [`Github | Репозиторијум`](https://github.com/crnobog69/dotwin)

🪣 | [`BitBucket | Репозиторијум`](https://bitbucket.org/crnobog69/dotwin)

🌲 | [`SourceHut | Репозиторијум`](https://git.sr.ht/~crnobog/dotwin)

🏔️ | [`Codeberg | Репозиторијум`](https://codeberg.org/crnobog/dotwin)

🦊 | [`GitLab | Репозиторијум`](https://gitlab.com/crnobog/dotwin)

🍵 | [`Gitea | Репозиторијум`](https://gitea.com/crnobog/dotwin)

---
