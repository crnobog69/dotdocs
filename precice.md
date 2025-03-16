<div align="center">

# *Пречице*

</div>

---

> [!WARNING]
> Не одржава се.

Колекција пречица које корстим на **_Arch Linux_**.

Налази се у: [`crnobog69/dotfiles/cmd`](https://github.com/crnobog69/dotfiles/tree/main/cmd)

## *Основне команде за Arch Linux*

### *Команде за навигацију*

- **`cd ime_direktorijuma`** - Прелазак у директоријум.
- **`cd ..`** - Враћање у родитељски директоријум.
- **`cd ~`** - Прелазак у кућни директоријум.
- **`pwd`** - Приказује путању тренутног директоријума.

### *Команде за Kitty Terminal (дељење хоризонтално)*

- **`Ctrl + Shift + e`** - дељење хоризонтално
- **`Ctrl + Shift + Enter`** - дељење хоризонтално
- **`Ctrl + Shift + s`** - ротација прозора
- **`Ctrl + Shift + left_arrow`** - претходни прозор
- **`Ctrl + Shift + right_arrow`** - следећи прозор
- **`Ctrl + Shift + up_arrow`** - горе прозор
- **`Ctrl + Shift + down_arrow`** - доле прозор

### *Управљање датотекама и директоријумима са `yay`*

- **`mkdir ime_direktorijuma`** - Креира нови директоријум.
- **`touch ime_datoteke`** - Креира празну датотеку.
- **`rm ime_datoteke`** - Уклања датотеку.
- **`rmdir ime_direktorijuma`** - Уклања празан директоријум.
- **`rm -r ime_direktorijuma`** - Уклања директоријум и све његове садржаје.
- **`cp izvor-datoteka odredište`** - Копира датотеку.
- **`mv izvor-datoteka odredište`** - Премешта или преименује датотеку.

### *Ажурирање система*

#### *pacman*

- **`sudo pacman -Syu`** - Ажурирање система.
- **`sudo pacman -S ime_paketa`** - Инсталирање пакета.
- **`sudo pacman -Rns ime_paketa`** - Уклањање пакета.
- **`pacman -Ss ime_paketa`** - Претрага пакета.

#### *yay*

- **`yay -Syu`**/**`yay`** - Ажурирање система са `yay`.
- **`yay -S ime_paketa`** - Инсталирање пакета са `yay`.
- **`yay -Rns ime_paketa`** - Уклањање пакета са `yay`.
- **`yay -Ss ime_paketa`** - Претрага пакета са `yay`.

### *Управљање услугама*

- **`sudo systemctl start ime_usluge`** - Покретање услуге.
- **`sudo systemctl stop ime_usluge`** - Заустављање услуге.
- **`systemctl status ime_usluge`** - Провера статуса услуге.
- **`sudo systemctl enable ime_usluge`** - Додавање услуге у аутоматско покретање.

### *Управљање Bluetooth-ом*

- **`sudo systemctl start bluetooth.service`** - Покретање Bluetooth услуге.
- **`sudo systemctl stop bluetooth.service`** - Заустављање Bluetooth услуге.
- **`sudo systemctl enable bluetooth.service`** - Додавање Bluetooth услуге у аутоматско покретање.
- **`bluetoothctl`** - Отвара Bluetooth контролу за управљање уређајима. Унутар `bluetoothctl`:
  - **`power on`** - Укључите Bluetooth.
  - **`power off`** - Искључите Bluetooth.
  - **`scan on`** - Појављивање уређаја у близини.
  - **`pair [MAC адреса]`** - Постављање везе са уређајем.

### *Остале команде*

- **`ls`** - Приказује садржај директоријума са груписањем директоријума првим, користећи `lsd --group-directories-first`.
- **`ls`** - Приказује садржај директоријума са бојама користећи `ls --color`.
- **`ncdu`** - Приказује корисност дисковног простора (инсталирајте га са `sudo pacman -S ncdu`).
- **`df -h`** - Провера дисковног простора.
- **`free -h`** - Провера меморије.
- **`top`** - Преглед активних процеса.
- **`htop`** - Напредни преглед активних процеса (инсталирајте га са `sudo pacman -S htop`).
- **`ip a`** - Приказује информације о мрежним интерфејсима.
- **`btm`** - Вишеплатфорски графички монитор процеса/система. (инсталирајте га са `sudo pacman -S bottom`)
- **`fzf`** - Претраживач за командну линију (инсталирајте га са `sudo pacman -S fzf`)
  - **`CTRL + T`** - Активирање `fzf`-а за било коју команду
    /
  - **`CTRL + R`** - Историја `fzf`-а
- **`bat`** - `cat` клон са синтаксом у боји - приказивач датотека у терминалу (инсталирајте га са `sudo pacman -S bat`)
- **`fuck`** - ако се команда погрешно напише, куцањем команде `fuck` исправиће се грешка и команда ће бити правилно написана
- **`linutil`** - Скрипта за инсталацију Linux алатки од Крис Тајтуса (`curl -fsSL https://christitus.com/linux | sh`).
- **`ftn`** - Скрипта која проверава да ли је недеља парна или непарна.
- **`cmd`** - Отвара датотеку `cmd.md` у `bat` приказивачу са синтаксном бојом
- **`catgit`** - Отвара Catppuccin GitHub страницу у Brave Ппретраживачу
- **`pasters`** - Скрипта која користи API од [paste.rs](https://paste.rs/)
- **`neovim`** / **`vim`** - Покреће `nvim`, алтернативу за Vim
- **`kolo`** - Скрипта за претрагу Arch Linux репозиторијума (укључујући AUR)
- **`zed`** - Покреће Zed Editor.
- **`crc`** - Прилагођена скирпта за компајлирање програма написаних у `C` програмском језику уз помоћ `gcc`
- **`entropy`** - Прилагођена скрипта за чишћење система
- **`gzdoom`** - Покреће GZDoom
  - **`gzdoom ime_od_wad`** - Покреће GZDoom са WAD-ом из `ime_od_wad`
  - **`gzdoom ime_od_pk3`** - Покреће GZDoom са PK3-ом из `ime_od_pk3`
- **`catbox`** - ./catbox.sh --help
- **`litterbox`** - ./litterbox.sh --help
- **`lama`** - ./lama.sh --help

### *Команде за ажурирање*

#### *EndeavourOS*

- **`azu-eos`** - Ажурирање EndeavourOS-а преко AUR-а

#### *Garuda Linux*

- **`azu-gar`** - Ажурирање Garuda Linux-а

#### *Универзално ажурирање*

- **`zap`** - Прилагођена скрипта за ажурирање система са подршком за више операцисних система

### *DOOM / Eternal*

- **`corrax`** - Мистериозни програм
- **`doom`** - Покреће програм који приказује DOOM грб
