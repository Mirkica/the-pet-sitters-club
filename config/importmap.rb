# Pin npm packages by running ./bin/importmap

pin "tailwindcss", to: "https://cdn.tailwindcss.com", preload: true
pin "application", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"
