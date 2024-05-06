import { extendTheme } from '@chakra-ui/react'
import "@fontsource/nunito-sans"; // Defaults to weight 400
import "@fontsource/nunito-sans/400.css"; // Specify weight
import "@fontsource/nunito-sans/400-italic.css"; // Specify weight and style

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Nunito Sans', sans-serif`,
  },
})

export default theme