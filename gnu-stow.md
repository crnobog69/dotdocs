# _GNU Stow_

---

**_GNU Stow_** је алат за управљање симболичким везама који олакшава организацију конфигурационих датотека (**_dotfiles_**) за различите апликације.

Званични сајт: [https://www.gnu.org/software/stow/](https://www.gnu.org/software/stow/)

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

---

## _Подржани програми_

- **`Kitty` (Mocha Green, Mocha Purple, Tokyo Night)**

  - Конфигурација терминала `Kitty` са темама Mocha Green, Mocha Purple и Tokyo Night.
  - Званични сајт: [https://sw.kovidgoyal.net/kitty/](https://sw.kovidgoyal.net/kitty/)

- **`Micro` (Mocha Transparent, Mocha)**

  - Подешавања едитора `Micro` са Mocha Transparent и Mocha темама.
  - Званични сајт: [https://micro-editor.github.io/](https://micro-editor.github.io/)

- **`Zed`**

  - Конфигурација за едитор `Zed`.
  - Званични сајт: [https://zed.dev/](https://zed.dev/)

- **`Zsh`**

  - Подешавања за шкољка `Zsh`.
  - Званични сајт: [https://www.zsh.org/](https://www.zsh.org/)

- **`Bash`**

  - Конфигурација за шкољка `Bash`.
  - Званични сајт: [https://www.gnu.org/software/bash/](https://www.gnu.org/software/bash/)

- **`Fish`**

  - Подешавања за шкољка `Fish`.
  - Званични сајт: [https://fishshell.com/](https://fishshell.com/)

- **`Fastfetch`**

  - Конфигурација за алат `Fastfetch` за брзо прикупљање системских информација.
  - Званични сајт: [https://github.com/LinusDierheimer/fastfetch](https://github.com/LinusDierheimer/fastfetch)

- **`Alacritty`**

  - Подешавања за терминал `Alacritty`.
  - Званични сајт: [https://alacritty.org/](https://alacritty.org/)

- **`Starship`**

  - Конфигурација за `Starship` промпт.
  - Званични сајт: [https://starship.rs/](https://starship.rs/)

- **`Bottom`**

  - Подешавања за системски монитор `Bottom`.
  - Званични сајт: [https://github.com/ClementTsang/bottom](https://github.com/ClementTsang/bottom)

- **`Cava`**

  - Конфигурација за аудио визуелизатор `Cava`.
  - Званични сајт: [https://github.com/karlstav/cava](https://github.com/karlstav/cava)

- **`Bat`**

  - Подешавања за алат `Bat` за приказивање садржаја датотека.
  - Званични сајт: [https://github.com/sharkdp/bat](https://github.com/sharkdp/bat)

- **`Btop`**

  - Конфигурација за системски монитор `Btop`.
  - Званични сајт: [https://github.com/aristocratos/btop](https://github.com/aristocratos/btop)

- **`Rio`**

  - Подешавања за терминал `Rio`.
  - Званични сајт: [https://github.com/raphi011/rio](https://github.com/raphi011/rio)

- **`Yazi`**

  - Конфигурација за фајл менаџер `Yazi`.
  - Званични сајт: [https://github.com/sxyazi/yazi](https://github.com/sxyazi/yazi)

- **`Lsd`**

  - Подешавања за алат `Lsd` за листање датотека.
  - Званични сајт: [https://github.com/Peltoche/lsd](https://github.com/Peltoche/lsd)

- **`Mpv`**

  - Конфигурација за медија плејер `Mpv`.
  - Званични сајт: [https://mpv.io/](https://mpv.io/)

- **`Nvim`**

  - Подешавања за едитор `Nvim`.
  - Званични сајт: [https://neovim.io/](https://neovim.io/)

- **`Tmux`**

  - Конфигурација за терминал мултиплексер `Tmux`.
  - Званични сајт: [https://github.com/tmux/tmux](https://github.com/tmux/tmux)

- **`VS Code`**

  - Подешавања за едитор `VS Code`.
  - Званични сајт: [https://code.visualstudio.com/](https://code.visualstudio.com/)

- **`Filen`**

  - Конфигурација за апликацију `Filen`.
  - Званични сајт: [https://filen.io/](https://filen.io/)

- **`Transparency.toggle`, `Plasmusic-toolbar`, `Zayron.simple.separator`, `Apdatifier`**
  - Подешавања за `Transparency.toggle`, `Plasmusic-toolbar`, `Zayron.simple.separator` и `Apdatifier`.
    <br>
    Ово су KDE Plasma додаци.

### Ручно:

- Посетите [`crnobog69/extra`](https://github.com/crnobog69/extra)

- [`assets`](https://github.com/crnobog69/dotfiles/tree/main/assets)

### Остало

- [`cmd`](https://github.com/crnobog69/dotfiles/tree/main/cmd/cmd.md)

---

За више информација о коришћењу GNU Stow-а за управљање конфигурационим датотекама, можете погледати следећи видео:

[Никада више не изгубите dotfiles уз GNU Stow](https://www.youtube.com/watch?v=NoFiYOqnC4o&utm_source=chatgpt.com)
