:imap jj <Esc>
:imap ii <Esc>


" sdlfkj comment
vmap <space>mc !boxes -d c-cmt<CR>
nmap <space>mc !!boxes -d c-cmt<CR>
vmap <space>xc !boxes -d c-cmt -r<CR>
nmap <space>xc !!boxes -d c-cmt -r<CR>


autocmd BufEnter * nmap <space>mc !!boxes -d pound-cmt<CR>
autocmd BufEnter * vmap <space>mc !boxes -d pound-cmt<CR>
autocmd BufEnter * nmap <space>xc !!boxes -d pound-cmt -r<CR>
autocmd BufEnter * vmap <space>xc !boxes -d pound-cmt -r<CR>
autocmd BufEnter *.html nmap <space>mc !!boxes -d html-cmt<CR>
autocmd BufEnter *.html vmap <space>mc !boxes -d html-cmt<CR>
autocmd BufEnter *.html nmap <space>xc !!boxes -d html-cmt -r<CR>
autocmd BufEnter *.html vmap <space>xc !boxes -d html-cmt -r<CR>
autocmd BufEnter *.js,*.[chly],*.[pc]c nmap <space>mc !!boxes -d c-cmt<CR>
autocmd BufEnter *.js,*.[chly],*.[pc]c vmap <space>mc !boxes -d c-cmt<CR>
autocmd BufEnter *.js,*.[chly],*.[pc]c nmap <space>xc !!boxes -d c-cmt -r<CR>
autocmd BufEnter *.js,*.[chly],*.[pc]c vmap <space>xc !boxes -d c-cmt -r<CR>
autocmd BufEnter *.C,*.cpp,*.java nmap <space>mc !!boxes -d java-cmt<CR>
autocmd BufEnter *.C,*.cpp,*.java vmap <space>mc !boxes -d java-cmt<CR>
autocmd BufEnter *.C,*.cpp,*.java nmap <space>xc !!boxes -d java-cmt -r<CR>
autocmd BufEnter *.C,*.cpp,*.java vmap <space>xc !boxes -d java-cmt -r<CR>
autocmd BufEnter .vimrc*,.exrc nmap <space>mc !!boxes -d vim-cmt<CR>
autocmd BufEnter .vimrc*,.exrc vmap <space>mc !boxes -d vim-cmt<CR>
autocmd BufEnter .vimrc*,.exrc nmap <space>xc !!boxes -d vim-cmt -r<CR>
autocmd BufEnter .vimrc*,.exrc vmap <space>xc !boxes -d vim-cmt -r<CR>= 


" Return to last edit position when opening files (You want this!)
autocmd BufReadPost *
     \ if line("'\"") > 0 && line("'\"") <= line("$") |
     \   exe "normal! g`\"" |
     \ endif

