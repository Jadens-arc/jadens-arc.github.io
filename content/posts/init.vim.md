+++
title = '~/.config/nvim/init.vim'
date = 2024-02-23T21:42:19-08:00
draft = false
tags=["linux", "neovim", "configs"]
+++

I know no one cares about my dotfiles. That's not going to stop me from sharing them.


``` vimscript
set nocompatible            " disable compatibility to old-time vi
set showmatch               " show matching 
set ignorecase              " case insensitive 
set mouse=v                 " middle-click paste with 
set hlsearch                " highlight search 
set incsearch               " incremental search
set tabstop=2               " number of columns occupied by a tab 
set softtabstop=2           " see multiple spaces as tabstops so <BS> does the right thing
set expandtab               " converts tabs to white space
set shiftwidth=2            " width for autoindents
set autoindent              " indent a new line the same amount as the line just typed
set number                  " add line numbers
set relativenumber
set wildmode=longest,list   " get bash-like tab completions
filetype plugin indent on   "allow auto-indenting depending on file type
syntax on                   " syntax highlighting
set mouse=a                 " enable mouse click
set clipboard=unnamedplus   " using system clipboard
filetype plugin on
set linebreak
set ttyfast                 " Speed up scrolling in Vim
" set spell                 " enable spell check (may need to download language package)
" set noswapfile            " disable creating swap file
" set backupdir=~/.cache/vim " Directory to store backup files.
set so=5 " Always center cursor

call plug#begin("~/.vim/plugged")
 " Plugin Section
 Plug 'dracula/vim'
" Plug 'ryanoasis/vim-devicons'
 Plug 'nvim-tree/nvim-web-devicons'
 Plug 'SirVer/ultisnips'
 Plug 'honza/vim-snippets'
 Plug 'scrooloose/nerdtree'
 Plug 'preservim/nerdcommenter'
 Plug 'mhinz/vim-startify'
 Plug 'bluz71/vim-moonfly-colors'
 Plug 'neoclide/coc.nvim', {'branch': 'release'}
 Plug 'nanotech/jellybeans.vim'
 Plug 'folke/tokyonight.nvim'
 Plug 'vim-scripts/AutoComplPop'
 Plug 'windwp/nvim-autopairs'
 Plug 'nvim-lualine/lualine.nvim'
 Plug 'nvim-tree/nvim-web-devicons'
call plug#end()
lua << END
require('lualine').setup()
require("nvim-autopairs").setup {}
END
" color schemes
 if (has("termguicolors"))
 "set termguicolors
 endif
 syntax enable
  colorscheme jellybeans
 " colorscheme jellybeans
set splitright
set splitbelow

" move line or visually selected block - alt+j/k
inoremap <A-j> <Esc>:m .+1<CR>==gi
inoremap <A-k> <Esc>:m .-2<CR>==gi
vnoremap <A-j> :m '>+1<CR>gv=gv
vnoremap <A-k> :m '<-2<CR>gv=gv" move split panes to left/bottom/top/right
 nnoremap <A-h> <C-W>H
 nnoremap <A-j> <C-W>J
 nnoremap <A-k> <C-W>K
 nnoremap <A-l> <C-W>L" move between panes to left/bottom/top/right
 nnoremap <C-h> <C-w>h
 nnoremap <C-j> <C-w>j
 nnoremap <C-k> <C-w>k
 nnoremap <C-l> <C-w>l

let g:UltiSnipsExpandTrigger="<tab>"
let g:UltiSnipsListSnippets="<c-l>"

"
" Press i to enter insert mode, and ii to exit insert mode.
:inoremap jk <Esc>

" open file in a text by placing text and gf
nnoremap gf :vert winc f<cr>" copies filepath to clipboard by pressing yf
:nnoremap <silent> yf :let @+=expand('%:p')<CR>
" copies pwd to clipboard: command yd
:nnoremap <silent> yd :let @+=expand('%:p:h')<CR>" Vim jump to the last position when reopening a file
if has("autocmd")
  au BufReadPost * if line("'\"") > 0 && line("'\"") <= line("$")
    \| exe "normal! g'\"" | endif
endif

nnoremap <leader>n :NERDTreeFocus<CR>
nnoremap <C-n> :NERDTree<CR>
nnoremap <C-t> :NERDTreeToggle<CR>
nnoremap <C-f> :NERDTreeFind<CR>


```


