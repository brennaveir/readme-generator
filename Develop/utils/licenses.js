//license info to be put into license section of readme
const licenses = [
    {
        license: 'Apache License 2.0',
        section:
            `Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.`,

        link: `[Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0)`,
        badge: `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    },
    {
        license: 'MIT License',
        section:
            `Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so.`,
        link: '[MIT License](https://spdx.org/licenses/MIT.html)',
        badge: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

    },
    {
        license: 'BSD 2-Clause "Simplified" License',
        section:
            `THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`,
        link: `[BSD 2-Clause "Simplified" License](https://spdx.org/licenses/BSD-2-Clause.html)`,
        badge: `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`

    },
    {
        license: 'BSD 3-Clause "New" or "Revised" License',
        section:
            `Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation
    and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
    contributors may be used to endorse or promote products derived from
    this software without specific prior written permission.
`,
        link: '[BSD 3-Clause "New" or "Revised" License](https://opensource.org/licenses/BSD-3-Clause)',
        badge: `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    },
    {
        license: 'Boost Software License 1.0',
        section:
            `Permission is hereby granted, free of charge, to any person or organization
obtaining a copy of the software and accompanying documentation covered by
this license (the "Software") to use, reproduce, display, distribute,
execute, and transmit the Software, and to prepare derivative works of the
Software, and to permit third-parties to whom the Software is furnished to
do so.`,
        link: '[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)',
        badge: `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    },
    {
        license: 'Creative Commons Zero v1.0 Universal',
        section:
            `The person who associated a work with this deed has dedicated the work to the public domain by waiving all of his or her rights to the work 
worldwide under copyright law, including all related and neighboring rights, to the extent allowed by law.

You can copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission.`,
        link: '[Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)',
        badge: `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`
    },
    {
        license: 'Eclipse Public License 1.0',
        section:
            `THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS ECLIPSE PUBLIC
LICENSE ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM
CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT.`,
        link: '[Eclipse Public License 1.0](https://www.eclipse.org/legal/epl-v10.html)',
        badge: `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
    },
    {
        license: 'GNU Affero General Public License v3.0',
        section:
            `This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.`,
        link: `[GNU Affero General Public License v3.0](https://www.gnu.org/licenses/)`,
        badge: `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
    },
    {
        license: 'GNU General Public License v3.0',
        section:
            `This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.`,
        link: `[GNU General Public License v3.0](https://www.gnu.org/licenses/)`,
        badge: `[![License: GPL v3](https://img.shields.io/badge/License-GPL_v3-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-3.0.en.html)`
    },
    {
        license: 'GNU Lesser General Public License v2.1',
        section:
            `This library is free software; you can redistribute it and/or modify it under the terms of the GNU Lesser General Public License 
as published by the Free Software Foundation; either version 2.1 of the License, or (at your option) any later version.`,
        link: '[GNU Lesser General Public License v2.1](https://www.gnu.org/licenses/)',
        badge: `[![License: AGPL v2.1](https://img.shields.io/badge/License-AGPL_v2.1-blue.svg)](https://www.gnu.org/licenses/agpl-2.1)`
    },
    {
        license: 'Mozilla Public License v2.0',
        section:
            `The contents of this file are subject to the Mozilla Public License
Version 1.1 (the "License"); you may not use this file except in
compliance with the License.`,
        link: '[Mozilla Public License v2.0](https://www.mozilla.org/en-US/MPL/1.1/)',
        badge: `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    },
    {
        license: 'The Unlicense',
        section:
            `This is free and unencumbered software released into the public domain.
Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.`,
        link: `[The Unlicense](http://unlicense.org/)`,
        badge: `[![License: MPL 2.1](https://img.shields.io/badge/License-Unilicense-green.svg)](https://opensource.org/licenses/Unlicense)`
    }
]

module.exports = licenses;