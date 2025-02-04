<div align="center">

# *Scripts*

</div>

---

> [!INFO]
> Repositories:
>
> **_GitHub_** - [`crnobog69/dotfiles/scripts`](https://github.com/crnobog69/dotfiles/tree/main/scripts)
>
> **_Codeberg_** - [`crnobog/dotfiles/scripts`](https://codeberg.org/crnobog/dotfiles/tree/main/scripts)
>
> **_GitLab_** - [`crnobog/dotfiles/scripts`](https://gitlab.com/crnobog/dotfiles/tree/main/scripts)

> [!NOTE]
> Scripts in [`crnobog69/dotfiles/scripts`](https://github.com/crnobog69/dotfiles/tree/main/scripts) are not the same as [`crnobog69/scripts`](https://github.com/crnobog69/scripts).

A collection of scripts I use on **_Arch Linux_**.

## _Download_

> [!WARNING]
> First check [**_Compatibility_**](#compatibility).

The scripts are located in the repository [`crnobog69/dotfiles`](https://github.com/crnobog69/dotfiles/tree/main/scripts).

```bash
git clone https://github.com/crnobog69/dotfiles.git
cd dotfiles
cd scripts
```

### _Linux_

First, you need to give permission to the script(s):

```bash
cd dotfiles
chmod +x scripts/pkg-rs.sh
chmod +x scripts/pkg-en.sh
chmod +x scripts/cgit.sh
chmod +x scripts/kolo.sh
chmod +x scripts/ftn.sh
chmod +x scripts/crc.sh
chmod +x scripts/entropy.sh
chmod +x scripts/zap.sh
chmod +x scripts/catbox.sh
chmod +x scripts/litterbox.sh
chmod +x scripts/spicetify.sh
chmod +x push.sh
chmod +x pull.sh
```

/

```bash
cd dotfiles && chmod +x scripts/pkg-rs.sh scripts/pkg-en.sh scripts/cgit.sh scripts/kolo.sh scripts/ftn.sh scripts/crc.sh scripts/entropy.sh scripts/zap.sh push.sh pull.sh
```

### _Windows_

#### _Power Shell_

```powershell
Set-ExecutionPolicy RemoteSigned
```

#### _CMD (Administrator)_

```cmd
powershell -Command "Set-ExecutionPolicy RemoteSigned"
```

## _Full List_

> [!NOTE]  
> `ftn` - stands for **_Faculty of Technical Sciences_**.

Generated with the help of the script [`scripts/brojac.py`](https://github.com/crnobog69/dotfiles/blob/main/scripts/brojac.py).

### _Git_

- `push.sh` - custom `pull`/`push` script for my `dotfiles`
- `pull.sh` - custom `pull` script for my `dotfiles`
- `push.ps1` - custom `pull`/`push` script (Windows)
- `pull.ps1` - custom `pull` script (Windows)

### *Directory*: `/dotfiles/scripts` 

- **Subdirectory:** `pasters`
- **Subdirectory:** `vhs`
- **Subdirectory:** `unison`
- **Subdirectory:** `bat`
- **Subdirectory:** `filen`
- **Subdirectory:** `staro`
- _File:_ `ftn.ps1`
  - Script that shows whether the week is even or odd (**_Windows_**)
- _File:_ `ftn.sh`
  - Script that shows whether the week is even or odd
- _File:_ `kolo.sh`
  - Script for searching Arch Linux repositories (including AUR)
- _File:_ `pkg-en.sh`
  - List of packages/programs I use
- _File:_ `pkg.sh`
  - List of packages/programs I use
- _File:_ `doom`
  - Program written in `Rust` programming language
- _File:_ `corrax`
  - Program written in `Rust` programming language
- _File:_ `crc.sh`
  - Script for compiling programs written in `C` programming language using `gcc`
- _File:_ `entropy.sh`
  - Script for cleaning the system
- _File:_ `.directory`
  - Directory icon
- _File:_ `unison-csync.sh`
  - Script for using `Unison` to synchronize directories
- _File:_ `trash.sh`
  - Script for emptying the trash
- _File:_ `catbox.sh`
  - Script for using [catbox.moe](https://catbox.moe/)
- _File:_ `litterbox.sh`
  - Script for using [litterbox.catbox.moe](https://litterbox.catbox.moe/)
- _File:_ `install-wakapi.sh`
  - Script for installing the program [**_Wakapi_**](https://github.com/muety/wakapi)
- _File:_ `desktopify.sh`
  - Script for creating `.desktop` files for AppImage applications
- _File:_ `papirus.sh`
  - Script for using [Papirus-Dark](https://github.com/PapirusDevelopmentTeam/papirus-icon-theme) and [Catppuccin Papirus Folders](https://github.com/catppuccin/papirus-folders)
- _File:_ `lama.sh`
  - Script for using [Ollama](https://github.com/ollama/ollama)
- _File:_ `packages.json`
  - List of packages/programs I use (to be used with `pkg.sh`)
- _File:_ `up.sh`
  - Script for updating the system with support for multiple operating systems
- _File:_ `brojac.py`
  - Script for displaying all files and subdirectories in a directory
- _File:_ `h264.py`
  - Script for converting videos to `h264` format using `FFmpeg`
- _File:_ `cspicetify.sh`
  - Script for updating the theme and extensions for [**_Spicetify_**](https://github.com/spicetify/cli)
- _File:_ `cgit.sh`
  - Script for using [**_Git_**](https://git-scm.com/)

#### Directory: `/scripts/pasters`

- _File:_ `config.json`
  - configuration for custom scripts
- _File:_ `history.json`
  - history
- _File:_ `pasters.py`
  - script that uses the API from [paste.rs](https://paste.rs/)

#### Directory: `/scripts/vhs`

- _File:_ `README-en.md`
  - Guide
- _File:_ `README.md`
  - Guide
- _File:_ `vhs-en.sh`
  - Script for processing videos
- _File:_ `vhs.sh`
  - Script for processing videos

#### Directory: `/scripts/unison`

Script for using `Unison` to synchronize directories

- _File:_ `install-unison.sh`
- _File:_ `unison-csync.service`
- _File:_ `unison-csync.timer`
- _File:_ `c_sync.prf`

#### Directory: `/scripts/bat`

Script for cleaning cache for [`Bat`](https://github.com/sharkdp/bat)

- _File:_ `bat-cache.sh`
- _File:_ `install-bat-cache-service.sh`

#### Directory: `scripts/filen`

Script for using [`Filen`](https://filen.io/)

- **Subdirectory:** `staro`
- _File:_ `filen-sync-fakultet.sh`
- _File:_ `filen-sync-fakultet.timer`
- _File:_ `filen.md`
- _File:_ `filen-sync-nacizam.sh`
- _File:_ `filen-sync-nacizam.timer`
- _File:_ `filencli-sync-nacizam-create.sh`
- _File:_ `filenclisync-fakultet-create.sh`

##### Directory: `scripts/filen/staro`

Old scripts for using [`Filen`](https://filen.io/)

- _File:_ `filen-service-install.sh`
- _File:_ `filensync.sh`

#### Directory: `scripts/staro`

Old scripts

- _File:_ `pkg-en.sh`
- _File:_ `pkg-rs.sh`
- _File:_ `cgit-staro.sh`
- _File:_ `cgit-stari.sh`
