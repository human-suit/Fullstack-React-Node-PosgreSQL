import requests
from bs4 import BeautifulSoup as BS
import os.path
import psycopg2
import re
import validators
from pywebcopy import save_webpage, save_website

lst = []
def fromSoup(name):
    link = "https://" + name + "/"
    html_file = name + ".html"
    namefile = name
    html_file = open(html_file, encoding='UTF-8').read()
    soup = BS(html_file, 'lxml')
    for el in soup.select(".square_blocks_item"):
        idSelect()
        title = el.select("a")
        print(link + "" + title[0].attrs["href"])
        url = link + "" + title[0].attrs["href"]
        sqlAdd(url)
        ra = requests.get(url)
        soup_ing = str(BS(ra.content, 'lxml'))
        soup_ing = soup_ing.encode()
        namefile = namefile + "1" + ".html"
        with open(str(namefile), "wb") as file:
            file.write(soup_ing)
        html_file = open(namefile, encoding='UTF-8').read()
        soupe = BS(html_file, 'lxml')

        for el in soupe.select(".programm"):
            name_start = el.select("h1")
            age = el.select("p")
            price = el.select("p")

            # print(name_start[0].text)
            # print(age[4].text)
            # print(price[6].text)
        try:
            name_sta = name_start[0].text.replace("«", "")
            name_sta2 = name_sta.replace("»", "")
            sqlAdd(name_sta2)
            sqlAdd(age[4].text)
            sqlAdd(price[6].text)
        except:
            name_sta2 = "Подробнее на сайте"
            age = "Подробнее на сайте"
            price = "Подробнее на сайте"
            print("Нет данных")
            sqlAdd(name_sta2)
            sqlAdd(age)
            sqlAdd(price)

        trev = []
        opis = []

        for el in soupe.select(".tabs"):
            trebovan = el.select(".normal_ui > li")

        print(len(trebovan))
        print(trebovan)

        if( len(trebovan) == 0):
            os.remove(namefile)
            continue
        elif( len(trebovan) == 2):
            for el in soupe.select("#content-tab1"):
                trebovan = el.select("p")
        elif ( len(trebovan) == 16):
            for el in soupe.select("#content-tab1"):
                trebovan = el.select("li")

        kol = 1
        len_treb = len(trebovan)//2

        for el in trebovan:
            if(kol<=len_treb):
                el = str(el).replace("</li>", "")
                el = str(el).replace(u"\xa0", u" ")
                el = str(el).replace("<li>", "")
                el = str(el).replace("</p>", "")
                el = str(el).replace("<p>", "")
                el = str(el).replace(u"\n\t\n", u"")
                el = str(el).replace(u"\n\n", u"")
                el = str(el).replace("<b>", "")
                el = str(el).replace("</b>", "")
                trev.append(el)
            else:
                el = str(el).replace("</li>", "")
                el = str(el).replace(u"\xa0", u" ")
                el = str(el).replace("<li>", "")
                el = str(el).replace("</p>", "")
                el = str(el).replace("<p>", "")
                el = str(el).replace(u"\n\t\n", u"")
                el = str(el).replace(u"\n\n", u"")
                el = str(el).replace("<b>", "")
                el = str(el).replace("</b>", "")
                opis.append(el)
            kol=kol+1

        line = ""
        for el in trev:
            line = line + el + "\n"
        sqlAdd(line)
        line = ""
        for el in opis:
            line = line + el + "\n"
        sqlAdd(line)

        name_komp = 'Фонд Содейстия Инновациям'
        sqlAdd(name_komp)
        os.remove(namefile)
        sqlZapros(lst)
        lst.clear()



        # for el in soupe.select("#content-tab1"):
        #     print(trebovan[0])

def sqlZapros(lst):
    conn = psycopg2.connect(dbname="startapDate", user="postgres", password="пароль", host="127.0.0.1")
    cursor = conn.cursor()
    # добавляем строку в таблицу
    kol = int(lst[0])
    bob = [str(kol), str(lst[2]), str(lst[6]), str(lst[5]), str(lst[7]), "Подробнее на сайте", "Подробнее на сайте", str(lst[4]), str(lst[1]), "true", str(lst[3])]
    cursor.execute("INSERT INTO startaps (id, namestart, opisanie, trebovaniya, nameKomp, statusData, crokVip, price, url, open, age) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)", bob)
    # выполняем транзакцию
    conn.commit()
    print("Данные добавлены")
    cursor.close()
    conn.close()
def sqlAdd(str):
    try:
        if(str[0].isspace()==True):
            str = str[2:]
    except:
        a = "Подробнее на сайте"
        print('Нет данных')
    a = str.replace(u"\n\t\t", u"")
    a = str.replace(u"\t\t", u"")
    a = str.replace(u"\xa0\xa0", u"")
    if(a=="" or a==" "):
        a = "Подробнее на сайте"
    lst.append(re.sub(r'\s+', ' ', a))
    print(lst)
def print_hi(name):
    file_path = name + ".html"

    if os.path.isfile(file_path) == False:
        name = "https://" + name +"/"
        r = requests.get(name)
        soup_ing = str(BS(r.content, 'lxml'))
        soup_ing = soup_ing.encode()
        with open(str(file_path), "wb") as file:
            file.write(soup_ing)


def idSelect():
    conn = psycopg2.connect(dbname="startapDate", user="postgres", password="пароль", host="127.0.0.1")
    cursor = conn.cursor()
    cursor.execute("SELECT id FROM public.startaps")
    id = cursor.fetchall()
    kol=1
    for raw in id:
        for row in id:
            if(kol==row[0]):
                kol = kol + 1
                continue
    # print(kol)
    # выполняем транзакцию
    conn.commit()
    lst.append(kol)
    print(id)
    cursor.close()
    conn.close()

def newParser(name):
    file_path = name + ".html"

    if os.path.isfile(file_path) == False:
        name = "https://" + name + "/measures"
        r = requests.get(name)
        soup_ing = str(BS(r.content, 'lxml'))
        soup_ing = soup_ing.encode()
        with open(str(file_path), "wb") as file:
            file.write(soup_ing)

def fromSoup2(name):
    link = "https://" + name + "/"
    html_file = name + ".html"
    namefile = name
    html_file = open(html_file, encoding='UTF-8').read()
    soup = BS(html_file, 'lxml')
    for el in soup.select(".js-measures-list > div"):
        idSelect()
        title = el.select("a")
        print(title[0].attrs["href"])
        url = title[0].attrs["href"]
        sqlAdd(url)
        ra = requests.get(url)
        soup_ing = str(BS(ra.content, 'lxml'))
        soup_ing = soup_ing.encode()
        namefile = namefile + "1" + ".html"
        with open(str(namefile), "wb") as file:
            file.write(soup_ing)
        html_file = open(namefile, encoding='UTF-8').read()
        soupe = BS(html_file, 'lxml')
        for el in soupe.select(".col-12"):
            name_start = el.select("h2")
            date = el.select(".mb-0")
            # print(name_start[0].text)
            # print(date[0])
            break
        dat = str(date[0]).replace('<p class="p--medium p--dashed mb-0">', "")
        dat2 = dat.replace("</p>", "")
        dat2 = dat2.replace('<span class="dash"></span>', "-")
        sqlAdd(name_start[0].text)
        sqlAdd(dat2)
            # name_start = "Подробнее на сайте"
            # date = "Подробнее на сайте"
            # print("Нет данных")
            # sqlAdd(name_start)
            # sqlAdd(date)

        for el in soupe.select(".event__description"):
            opisan = el.select("p")

        # print(opisan[1].text)
        # print(opisan[2].text)
        try:
            stroka = opisan[1].text + "\n" + opisan[2].text + "\n"
            sqlAdd(stroka)
        except:
            try:
                stroka = opisan[0].text + "\n"
                sqlAdd(stroka)
            except:
                stroka = "Подробнее на сайте"
                sqlAdd(stroka)

        for el in soupe.select(".event__description"):
            trebov = el.select("div")

        try:
            stroka = trebov[1].text + "\n" + trebov[2].text + "\n" + trebov[4].text + "\n" + trebov[5].text + "\n"
            sqlAdd(stroka)
        except:
            try:
                stroka = trebov[1].text + "\n" + trebov[2].text + "\n"
                sqlAdd(stroka)
            except:
                stroka = "Подробнее на сайте"
                sqlAdd(stroka)
        for el in soupe.select(".event_organizer"):
            name_org = el.select(".col-md-8")
        for el in soupe.select(".event_age"):
            age = el.select(".col-md-8")
        sqlAdd(name_org[0].text)
        sqlAdd(age[0].text)
        os.remove(namefile)

        sqlZap(lst)
        lst.clear()
def sqlZap(lst):
    conn = psycopg2.connect(dbname="startapDate", user="postgres", password="пароль", host="127.0.0.1")
    cursor = conn.cursor()
    # добавляем строку в таблицу
    kol = int(lst[0])
    bob = [str(kol), str(lst[2]), str(lst[4]), str(lst[5]), str(lst[6]), str(lst[3]), "Подробнее на сайте", "Подробнее на сайте", str(lst[1]), "true", str(lst[7])]
    cursor.execute("INSERT INTO startaps (id, namestart, opisanie, trebovaniya, nameKomp, statusData, crokVip, price, url, open, age) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)", bob)
    # выполняем транзакцию
    conn.commit()
    print("Данные добавлены")
    cursor.close()
    conn.close()

def newParse(name):
    file_path = name + ".html"

    if os.path.isfile(file_path) == False:
        name = "https://" + name + "/competitions/"
        r = requests.get(name)
        soup_ing = str(BS(r.content, 'lxml'))
        soup_ing = soup_ing.encode()
        with open(str(file_path), "wb") as file:
            file.write(soup_ing)

def fromSou(name):
    link = "https://" + name
    html_file = name + ".html"
    namefile = name
    html_file = open(html_file, encoding='UTF-8').read()
    soup = BS(html_file, 'lxml')
    for el in soup.select("#area_list > a"):
        idSelect()
        # title = el.select("a")
        url = el.attrs["href"]
        sqlAdd(url)
        ra = requests.get(url)
        soup_ing = str(BS(ra.content, 'lxml'))
        soup_ing = soup_ing.encode()
        namefile = namefile + "1" + ".html"
        with open(str(namefile), "wb") as file:
            file.write(soup_ing)
        html_file = open(namefile, encoding='UTF-8').read()
        soupe = BS(html_file, 'lxml')
        for el in soupe.select(".contest__top"):
            name_start = el.select("h1")
            break
        # dat = str(date[0]).replace('<p class="p--medium p--dashed mb-0">', "")
        sqlAdd(name_start[0].text)

        trev = []
        opis = []

        for el in soupe.select(".contest__info-wrap"):
            trebovan = el.select("ul > li")

        # print(len(trebovan))
        # print(trebovan)

        if (len(trebovan) == 0):
            os.remove(namefile)
            continue

        kol = 1
        len_treb = len(trebovan) // 2

        for el in trebovan:
            if (kol <= len_treb):
                el = str(el).replace("</li>", "")
                el = str(el).replace(u"\xa0", u" ")
                el = str(el).replace("<li>", "")
                el = str(el).replace("</p>", "")
                el = str(el).replace("<p>", "")
                el = str(el).replace(u"\n\t\n", u"")
                el = str(el).replace(u"\n\n", u"")
                el = str(el).replace("<b>", "")
                el = str(el).replace("</b>", "")
                trev.append(el)
            else:
                el = str(el).replace("</li>", "")
                el = str(el).replace(u"\xa0", u" ")
                el = str(el).replace("<li>", "")
                el = str(el).replace("</p>", "")
                el = str(el).replace("<p>", "")
                el = str(el).replace(u"\n\t\n", u"")
                el = str(el).replace(u"\n\n", u"")
                el = str(el).replace("<b>", "")
                el = str(el).replace("</b>", "")
                opis.append(el)
            kol = kol + 1

        line = ""
        for el in trev:
            line = line + el + "\n"
        sqlAdd(line)
        line = ""
        for el in opis:
            line = line + el + "\n"
        sqlAdd(line)
        for el in soupe.select(".contest__info-wrap"):
            price = el.select("p")
        for el in soupe.select(".schedule__list"):
            date = el.select(".schedule__item-text")
        # print(price[len(price)-4].text)
        try:
            sqlAdd(price[len(price)-4].text)
        except:
            sqlAdd("Подробнее на сайте")
        try:
            sqlAdd(date[0].text)
        except:
            sqlAdd("Подробнее на сайте")
        name_kom = "Фонд Потанина 25 лет"
        sqlAdd(name_kom)
        os.remove(namefile)
        sqlZap(lst)
        lst.clear()

def sqlZap(lst):
    conn = psycopg2.connect(dbname="startapDate", user="postgres", password="пароль", host="127.0.0.1")
    cursor = conn.cursor()
    # добавляем строку в таблицу
    kol = int(lst[0])
    bob = [str(kol), str(lst[2]), str(lst[3]), str(lst[4]), str(lst[7]), str(lst[6]), "Подробнее на сайте", str(lst[5]), str(lst[1]), "true", "Подробнее на сайте"]
    cursor.execute("INSERT INTO startaps (id, namestart, opisanie, trebovaniya, nameKomp, statusData, crokVip, price, url, open, age) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)", bob)
    # выполняем транзакцию
    conn.commit()
    print("Данные добавлены")
    cursor.close()
    conn.close()

def newPars(name):
    file_path = name + ".html"

    if os.path.isfile(file_path) == False:
        name = "https://" + name + "/data/grants/list?region="
        r = requests.get(name)
        soup_ing = str(BS(r.content, 'lxml'))
        soup_ing = soup_ing.encode()
        with open(str(file_path), "wb") as file:
            file.write(soup_ing)

def fromSo(name):
    link = "https://" + name
    html_file = name + ".html"
    namefile = name
    html_file = open(html_file, encoding='UTF-8').read()
    soup = BS(html_file, 'lxml')
    for el in soup.select(".row"):
        idSelect()
        title = el.select("a")
        print(link + "" + title[0].attrs["href"])
        url = link + "" + title[0].attrs["href"]
        break
        sqlAdd(url)
        ra = requests.get(url)
        soup_ing = str(BS(ra.content, 'lxml'))
        soup_ing = soup_ing.encode()
        namefile = namefile + "1" + ".html"
        with open(str(namefile), "wb") as file:
            file.write(soup_ing)
        html_file = open(namefile, encoding='UTF-8').read()
        soupe = BS(html_file, 'lxml')
        for el in soupe.select(".contest__top"):
            name_start = el.select("h1")
            break
        # dat = str(date[0]).replace('<p class="p--medium p--dashed mb-0">', "")
        sqlAdd(name_start[0].text)

        trev = []
        opis = []

        for el in soupe.select(".contest__info-wrap"):
            trebovan = el.select("ul > li")

        # print(len(trebovan))
        # print(trebovan)

        if (len(trebovan) == 0):
            os.remove(namefile)
            continue

        kol = 1
        len_treb = len(trebovan) // 2

        for el in trebovan:
            if (kol <= len_treb):
                el = str(el).replace("</li>", "")
                el = str(el).replace(u"\xa0", u" ")
                el = str(el).replace("<li>", "")
                el = str(el).replace("</p>", "")
                el = str(el).replace("<p>", "")
                el = str(el).replace(u"\n\t\n", u"")
                el = str(el).replace(u"\n\n", u"")
                el = str(el).replace("<b>", "")
                el = str(el).replace("</b>", "")
                trev.append(el)
            else:
                el = str(el).replace("</li>", "")
                el = str(el).replace(u"\xa0", u" ")
                el = str(el).replace("<li>", "")
                el = str(el).replace("</p>", "")
                el = str(el).replace("<p>", "")
                el = str(el).replace(u"\n\t\n", u"")
                el = str(el).replace(u"\n\n", u"")
                el = str(el).replace("<b>", "")
                el = str(el).replace("</b>", "")
                opis.append(el)
            kol = kol + 1

        line = ""
        for el in trev:
            line = line + el + "\n"
        sqlAdd(line)
        line = ""
        for el in opis:
            line = line + el + "\n"
        sqlAdd(line)
        for el in soupe.select(".contest__info-wrap"):
            price = el.select("p")
        for el in soupe.select(".schedule__list"):
            date = el.select(".schedule__item-text")
        # print(price[len(price)-4].text)
        try:
            sqlAdd(price[len(price)-4].text)
        except:
            sqlAdd("Подробнее на сайте")
        try:
            sqlAdd(date[0].text)
        except:
            sqlAdd("Подробнее на сайте")
        name_kom = "Фонд Потанина 25 лет"
        sqlAdd(name_kom)
        os.remove(namefile)
        sqlZap(lst)
        lst.clear()

def sqlZa(lst):
    conn = psycopg2.connect(dbname="startapDate", user="postgres", password="пароль", host="127.0.0.1")
    cursor = conn.cursor()
    # добавляем строку в таблицу
    kol = int(lst[0])
    bob = [str(kol), str(lst[2]), str(lst[3]), str(lst[4]), str(lst[7]), str(lst[6]), "Подробнее на сайте", str(lst[5]), str(lst[1]), "true", "Подробнее на сайте"]
    cursor.execute("INSERT INTO startaps (id, namestart, opisanie, trebovaniya, nameKomp, statusData, crokVip, price, url, open, age) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)", bob)
    # выполняем транзакцию
    conn.commit()
    print("Данные добавлены")
    cursor.close()
    conn.close()


def webpage(url, folder, name):
    save_webpage(
        url=url,
        project_folder=folder,
        project_name=name,
        bypass_robots=True,
        debug=True,
        open_in_browser=True,
        delay=None,
        threaded=False,
    )
if __name__ == '__main__':
    try:
        # пытаемся подключиться к базе данных
        conn = psycopg2.connect(dbname="startapDate", user="postgres", password="пароль", host="127.0.0.1")
        conn.close()
        print_hi('fasie.ru')
        fromSoup('fasie.ru')
        # https: // myrosmol.ru / measures
        newParser('myrosmol.ru')
        fromSoup2('myrosmol.ru')
        # https://fondpotanin.ru/competitions/
        newParse('fondpotanin.ru')
        fromSou('fondpotanin.ru')
    except:
        # в случае сбоя подключения будет выведено сообщение в STDOUT
        print('Создайте базу данных Posqresql с бд - startapDate')


    
    # https: // rscf.ru / contests
    # https://гранты.рф/data/grants/list?region=
    # folder = r"C:\Users\User\PycharmProjects\pythonProject1"
    # name = "гранты.рф"
    # webpage("https: // гранты.рф / data / grants / list?region =",folder,name)
    # print(1)
    # newParse('гранты.рф')
    # fromSou('гранты.рф')

