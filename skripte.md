<div align="center">

# *Скрипте*

</div>

---

> [!INFO]
> Репозиторијуми:
>
> **_GitHub_** - [`crnobog69/dotfiles/scripts`](https://github.com/crnobog69/dotfiles/tree/main/scripts)
>
> **_BitBucket_** - [`crnobog69/dotfiles/scripts`](https://bitbucket.org/crnobog69/dotfiles/src/main/scripts/)
>
> **_SourceHut_** - [`crnobog/dotfiles/scripts`](https://git.sr.ht/~crnobog/dotfiles/tree/main/item/scripts)
>
> **_Codeberg_** - [`crnobog/dotfiles/scripts`](https://codeberg.org/crnobog/dotfiles/tree/main/scripts)
>
> **_GitLab_** - [`crnobog/dotfiles/scripts`](https://gitlab.com/crnobog/dotfiles/tree/main/scripts)

> [!NOTE]
> Скирипте у [`crnobog69/dotfiles/scripts`](https://github.com/crnobog69/dotfiles/tree/main/scripts) нису исто што и [`crnobog69/scripts`](https://github.com/crnobog69/scripts).

Колекција скрипти које корстим на **_Arch Linux_**.

## _Преузимање_

> [!WARNING]
> Прво проверите [**_Компатибилност_**](#компатибилност).

Скрипте се налазе у репозиторијуму [`crnobog69/dotfiles`](https://github.com/crnobog69/dotfiles/tree/main/scripts).

```bash
git clone https://github.com/crnobog69/dotfiles.git
cd dotfiles
cd scripts
```

### *Скрипта за инсталацију*

Прилагођена скрипта за инсталацију (*dotfiles*):


```bash
curl -fsSL https://raw.githubusercontent.com/crnobog69/dotfiles/refs/heads/main/install.sh | sh
```

Или уз команду:

```bash
cd dotfiles
chmod +x install.sh
./install.sh
```

### _Linux_

Прво морате да дате дозволу скрипти/ама:

```bash
cd dotfiles/scripts/
chmod +x *.sh
cd ..
chmod +x *.sh
```

### _Windows_

#### _Power Shell_

```powershell
Set-ExecutionPolicy RemoteSigned
```

#### _CMD (Админинстратор)_

```cmd
powershell -Command "Set-ExecutionPolicy RemoteSigned"
```

## _Пуна листа_

> [!NOTE]  
> `ftn` - означава **_Факултет Техничких Наука_**.

Генерисано уз помоћ скрипте [`scripts/brojac.py`](https://github.com/crnobog69/dotfiles/blob/main/scripts/brojac.py).

### _Git_

- `push.sh` - прилагођена `pull`/`push` скрипта за моје `dotfiles`
- `pull.sh` - прилагођена `pull` скрипта за моје `dotfiles`
- `push.ps1` - прилагођена `pull`/`push` скрипта (Windows)
- `pull.ps1` - прилагођена `pull` скрипта (Windows)

### *Директоријум*: `/dotfiles/scripts` 

- **Поддиректоријум:** `pasters`
- **Поддиректоријум:** `vhs`
- **Поддиректоријум:** `unison`
- **Поддиректоријум:** `bat`
- **Поддиректоријум:** `filen`
- **Поддиректоријум:** `staro`
- _Датотека:_ `ftn.ps1`
  - Скрипта која приказује да ли је недеља парна или непарна (**_Windows_**)
- _Датотека:_ `ftn.sh`
  - Скрипта која приказује да ли је недеља парна или непарна
- _Датотека:_ `kolo.sh`
  - Скрипта за претрагу Arch Linux репозиторијума (укључујући AUR)
- _Датотека:_ `pkg-en.sh`
  - List of packages/programs I use
- _Датотека:_ `pkg.sh`
  - Листа пакета/програма које користим
- _Датотека:_ `doom`
  - Програм написан у `Rust` пограмском језику
- _Датотека:_ `corrax`
  - Програм написан у `Rust` пограмском језику
- _Датотека:_ `crc.sh`
  - Скирпта за компајлирање програма написаних у `C` програмском језику уз помоћ `gcc`-а
- _Датотека:_ `entropy.sh`
  - Скрипта за чишћење система
- _Датотека:_ `.directory`
  - Иконица директоријума
- _Датотека:_ `unison-csync.sh`
  - Скрипта за коришћење `Unison` за синхронизацију директоријума
- _Датотека:_ `trash.sh`
  - Скрипта за пражњење канте
- _Датотека:_ `catbox.sh`
  - Скрипта за коришћење [catbox.moe](https://catbox.moe/)
- _Датотека:_ `litterbox.sh`
  - Скрипта за коришћење [litterbox.catbox.moe](https://litterbox.catbox.moe/)
- _Датотека:_ `install-wakapi.sh`
  - Скрипта за инсталирање програма [**_Wakapi_**](https://github.com/muety/wakapi)
- _Датотека:_ `desktopify.sh`
  - Скрипта за креирање `.desktop` датотеке за AppImage апликације
- _Датотека:_ `papirus.sh`
  - скрипта за коришћење [Papirus-Dark](https://github.com/PapirusDevelopmentTeam/papirus-icon-theme) и [Catppuccin Papirus Folders](https://github.com/catppuccin/papirus-folders)
- _Датотека:_ `lama.sh`
  - Скрипта за коришћење [Ollama](https://github.com/ollama/ollama)
- _Датотека:_ `packages.json`
  - Листа пакета/програма које користим (користити уз `pkg.sh`)
- _Датотека:_ `up.sh`
  - Скрипта за ажурирање система са подршком за више операцисних система
- _Датотека:_ `brojac.py`
  - Скрипта за приказивање свих датотека и поддиректоријума у директоријуму
- _Датотека:_ `h264.py`
  - Скрипта за pretvarawe видеа у формату `h264` uz pomoć `FFmpeg`
- _Датотека:_ `cspicetify.sh`
  - Скиптра за ажурирање теме и додатака за [**_Spicetify_**](https://github.com/spicetify/cli)
- _Датотека:_ `cgit.sh`
  - Скрипта за коришћење [**_Git_**](https://git-scm.com/)

#### Директоријум: `/scripts/pasters`

- _Датотека:_ `config.json`
  - конфигурација за прилагођене скрипте
- _Датотека:_ `history.json`
  - историја
- _Датотека:_ `pasters.py`
  - скрипта која користи API од [paste.rs](https://paste.rs/)

#### Директоријум: `/scripts/vhs`

- _Датотека:_ `README-en.md`
  - Guide
- _Датотека:_ `README.md`
  - Упутство
- _Датотека:_ `vhs-en.sh`
  - Script for processing videos
- _Датотека:_ `vhs.sh`
  - Скрипта за обраду видеа

#### Директоријум: `/scripts/unison`

Скрипта за коришћење `Unison` за синхронизацију директоријума

- _Датотека:_ `install-unison.sh`
- _Датотека:_ `unison-csync.service`
- _Датотека:_ `unison-csync.timer`
- _Датотека:_ `c_sync.prf`

#### Директоријум: `/scripts/bat`

Скрипта за чишћење кеша за [`Bat`](https://github.com/sharkdp/bat)

- _Датотека:_ `bat-cache.sh`
- _Датотека:_ `install-bat-cache-service.sh`

#### Директоријум: `scripts/filen`

Скрипта за коришћење [`Filen`](https://filen.io/)

- **Поддиректоријум:** `staro`
- _Датотека:_ `filen-sync-fakultet.sh`
- _Датотека:_ `filen-sync-fakultet.timer`
- _Датотека:_ `filen.md`
- _Датотека:_ `filen-sync-nacizam.sh`
- _Датотека:_ `filen-sync-nacizam.timer`
- _Датотека:_ `filencli-sync-nacizam-create.sh`
- _Датотека:_ `filenclisync-fakultet-create.sh`

##### Директоријум: `scripts/filen/staro`

Старе скрипте за коришћење [`Filen`](https://filen.io/)

- _Датотека:_ `filen-service-install.sh`
- _Датотека:_ `filensync.sh`

#### Директоријум: `scripts/staro`

Старе скрипте

- _Датотека:_ `pkg-en.sh`
- _Датотека:_ `pkg-rs.sh`
- _Датотека:_ `cgit-staro.sh`
- _Датотека:_ `cgit-stari.sh`
