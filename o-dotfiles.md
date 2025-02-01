# _О Dotfiles_

> [!INFO]
> Репозиторијуми:
>
> **_GitHub_** - [`crnobog69/dotfiles`](https://github.com/crnobog69/dotfiles)
>
> **_Codeberg_** - [`crnobog/dotfiles`](https://codeberg.org/crnobog/dotfiles)
>
> **_GitLab_** - [`crnobog/dotfiles`](https://gitlab.com/crnobog/dotfiles)

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

2. Клонирање:

```bash
git clone https://github.com/crnobog69/dotfiles.git
```

Или уз [`extra`](https://github.com/crnobog69/extra):

```bash
git clone https://codeberg.org/crnobog/dotfiles.git && git clone https://github.com/crnobog69/extra.git
```

3. Примена конфигурација:

```bash
cd ~/.dotfiles
stow kitty-cat-green zed zsh fastfetch micro starship fish bottom cava bat mpv
```

или (једно)

```bash
cd ~/.dofiles
stow zed
```

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
> Није пожан у потпуности. За Windows посетити [`DotWin`](/dotwin).


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
| **ОС**               | Arch Linux (Garuda Linux)           | Windows 11                                                                                                    |
| **РО**               | KDE Plasma 6.2.5                    | -                                                                                                             |
| **Иконице**          | BeautyLine                          | Прилагођене Papirus-Dark - [Catppuccin Latte Lavender Folders](https://github.com/catppuccin/papirus-folders) |
| **Композитор**       | Wayland                             | -                                                                                                             |
| **Шкољка**           | zsh (Starship, Zoxide, Zinit, Tmux) | fish, bash                                                                                                    |
| **Промт**            | Starship                            | -                                                                                                             |
| **Терминал**         | Kitty                               | Alacritty, Konsole                                                                                            |
| **ИРО**              | VS Codium, VS Code, micro           | Zed                                                                                                           |
| **Менаџер датотека** | Dolphin                             | Thunar                                                                                                        |
| **Прегледач**        | Brave                               | Firefox Developer Edition                                                                                     |

---
