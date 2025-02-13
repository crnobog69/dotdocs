<div align="center">

# ⚙️ Конфигурације | KDE Plasma 6.2.5

</div>

- 🗼 | [`konsole`](https://github.com/crnobog69/extra/blob/main/kde/konsole/README.md) <= упутство | **Tokyo Night** тема
- ⌨️ | [`shortcut-scheme`](https://github.com/crnobog69/extra/blob/main/kde/shortcut-scheme/README.md) <= упутство | моја конфигурација пречица за тастатуру
- 🐈 | [`catppuccin/kde`](https://github.com/catppuccin/kde) <= тема за KDE Plasma

`colors` датотека је за `AppleDark-All` тему - `/home/krematorijum/.local/share/plasma/desktoptheme/AppleDark-ALL/`

## Остало

### Нема насловне траке?

У `kwinrc` датотеци

```bash
micro ./config/kwinrc
```

Испод **[Windows]** секције за `BorderlessMaximizedWindows` подесите на вредност `false`.

Овако:

```txt
[Windows]
BorderlessMaximizedWindows=false
```

<br>
