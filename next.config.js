/** @type {import('next').NextConfig} */
module.exports = {
    async headers() {
        return [
            {
                source: "/resume.pdf",
                headers: [
                    {
                        key: "Content-Disposition",
                        value: 'inline; filename="001_Devasheesh_Mishra_AIML_Backend_Engineer.pdf"',
                    },
                ],
            },
        ];
    },
};
