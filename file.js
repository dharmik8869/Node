const fs = require('fs')
// fs.writeFileSync('hello.txt', 'Hello')
// fs.appendFileSync('HEllo.txt', 'Dharmik Vaghela')
// a = fs.readFileSync('hello.txt')
// console.log(a.toString())

// fs.renameSync('hello.txt', 'Test.txt')

// fs.unlinkSync('Test.txt')

fs.writeFile("hhh.txt", "hello", (err, data) => {
    if (err) {
        return console.error(err);
    }
    console.log("Data Written Succsesfully")

    fs.appendFile('hhh.txt', 'Dharmik Vaghela', (err, data) => {
        if (err) {
            return console.error(err)
        }
        console.log("Data Appended")

        fs.readFile("hhh.txt", "utf8", (err, data) => {
            if (err) {
                return console.error(err);
            }
            console.log(data);

            fs.rename("hhh.txt", "newfile.txt", (err, data) => {
                if (err) {
                    return console.error(err);
                }
                console.log("File renamed");

                fs.unlink("newfile.txt", (err, data) => {
                    if (err) {
                        return console.error(err);
                    }
                    console.log(" File deleted successfully!");
                });
            });
        });
    });
});

