import PyPDF2
pdfFileObj=open(r'C:\Users\dell\Desktop\BBA_18.pdf','rb')
pdfReader=PyPDF2.PdfFileReader(pdfFileObj)
page8=pdfReader.getPage(19)
st=page8.extractText()
stN=st.replace('\n','')
syl=stN[stN.index('Unit-I:'):stN.index('Suggested Readings:')]
syl=syl.replace(';',',')
syl=syl.replace('  ',' ')
newSyl=''
prevC=''
for c in syl:
    if(prevC!=','):
        newSyl+=c
    elif(c!=' '):
        newSyl+=c
    prevC=c
syl=newSyl
units=syl.split('Unit-')
units.remove('')
for i in range(len(units)):
    units[i]=units[i].split(',')
print(units)
for unit in units:
    for i in range(len(unit)):
        unit[i]='<a href="' + unit[i].replace(' ','-') + '.pdf"'+' target="_blank">' + unit[i] + '</a>'
f=open("abc.txt","w+")

out=''

for i in range(len(units)):
    units[i]=str(units[i]).replace(']','').replace('[','')
    out+='<li><u><strong>Unit-I:</strong></u>'+units[i].replace("'",'')+'</li>\n\n'
    
f.write(out)
f.close()
