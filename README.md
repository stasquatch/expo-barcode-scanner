# expo-barcode-scanner

This is a quick proof of concept for a barcode scanning book organization app. Turns out scanning barcodes on books isn't as simple as it seems. 
I struggled to find a way to reliably take a barcode and turn it into an isbn to use the Google Books API to fetch more book information.

The next thing I was going to look into is text-recognition on images, so a user could take a photo of the ISBN listed above the barcode, and then use that
to look up the ISBN on the Google Books API. ORC isn't supported in Expo, so I'd have to eject the app.

# Run it

`yarn install`
`yarn start`
