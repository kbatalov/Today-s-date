        obj_hours = document.getElementById("hours");
        name_month = new Array("января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря");
        name_day = new Array("воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота");

        function wr_hours() {
            time = new Date();
            time_sec = time.getSeconds();
            time_min = time.getMinutes();
            time_hours = time.getHours();
            var decCache = [],
                decCases = [2, 0, 1, 1, 1, 2];

            function decOfNum(number, titles) {
                if (!decCache[number]) decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];
                return titles[decCache[number]];
            }

            time_wr = +time.getDate() + " " + name_month[time.getMonth()] + " " + time.getFullYear() + " года, " + name_day[time.getDay()] + ", " + time.getHours() + "  " + decOfNum(time.getHours(), ['час', 'часа', 'часов']) + " " + time.getMinutes() + " " + decOfNum(time.getMinutes(), ['минута', 'минуты', 'минут']) + " " + time.getSeconds() + " " + decOfNum(time.getSeconds(), ['секунда', 'секунды', 'секунд']);
            obj_hours.innerHTML = time_wr;

        }


        wr_hours();
        setInterval("wr_hours();", 1000);