module.exports = {
    purge: {
        content: [
            './src/pages/**/*.{js,ts,jsx,tsx}',
            './src/components/**/*.{js,ts,jsx,tsx}'
        ],
        safeliste: [/^bg-/, /^to-/, /^from-/]
    },
    theme: {
        extend: {}
    },
    plugins: []
}