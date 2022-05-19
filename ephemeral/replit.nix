# ╔══════════════════════════════════════════════════════════╗
# ║                        replit.nix                        ║
# ╚══════════════════════════════════════════════════════════╝
# +----------------------------------------------------------+
# |                        replit.nix                        |
# +----------------------------------------------------------+

{ pkgs }: {
  deps = with pkgs; [
    chromium
    nodejs-16_x
      nodePackages.typescript-language-server
      nodePackages.node-pre-gyp
      nodePackages.yarn
      nodePackages.pnpm
    neovim
    lf
    xplr
    fish
    http-prompt
    less
    bat
    exa
    glow
    mdcat
    delta
    boxes
    wgetpaste
    chezmoi
    figlet
    boxes
    ncdu
    gdu
    bottom
    tmux
    # Add more packages if needed
  ];
}

