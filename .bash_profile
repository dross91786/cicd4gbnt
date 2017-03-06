function proxify() {
  export http_proxy=<input proxy>
  export https_proxy=<input proxy>
  # Atom proxies
  apm config set strict-ssl false
  apm config set proxy $http_proxy
  apm config set https_proxy $https_proxy
  # NPM proxies
  npm config set strict-ssl false
  npm config set proxy $http_proxy
  npm config set https_proxy $https_proxy
  # Git proxies
  git config --global --add http.proxy $http_proxy
  git config --global --add https.proxy $https_proxy
}
function unproxify() {
  # Unset global proxies
  unset http_proxy
  unset https_proxy
  # Unset Atom proxies
  apm config set strict-ssl true
  apm config delete proxy
  apm config delete https_proxy
  # Unset NPM proxies
  npm config set strict-ssl true
  npm config delete proxy
  npm config delete https_proxy
  # Unset Git Proxies
  git config --global --unset-all http.proxy
  git config --global --unset-all https.proxy
}
alias pfy='proxify'
alias upfy='unproxify'
alias proxgit='git config --local --add http.proxy <input proxy>; git config --local --add https.proxy <input proxy>'
alias unproxgit='git config --global --unset http.proxy <input proxy>; git config --global --unset https.proxy'
function proxed (){
  http=`env | grep "https\?_proxy"`
  if [ ! -z "$http" ]; then
    echo "Proxy currently set"
  else
    echo "Proxy not currently set"
  fi
}
