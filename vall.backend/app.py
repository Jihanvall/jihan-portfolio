from flask import Flask,request,jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
app=Flask(__name__)
CORS(app)
@app.route('/contact',methods=['POST'])
def contact():
    data=request.get_json()
    name=data.get('name')
    email=data.get('email')
    message=data.get('message')
    sender="hello@jihanvall.com"
    receiver="hello@jihanvall.com"
    password="Jihansest24."
    msg=MIMEText(f"Message from {name} <{email}>:\n\n{message}")
    msg['Subject']="New Conact Form Submission"
    msg['From']=sender
    msg['To']=receiver
    try:
        with smtplib.SMTP_SSL("mail.privateemail.com",465) as server:
            server.login(sender,password)
            server.send_message(msg)
        return jsonify({"success":True,"message":"Message sent successfully!"}),200
    except Exception as e:
        print(f"Failed to send email: {e}")
        return jsonify({"success":False,"message":"Failed to send email."}),500    
                      
if __name__ =='__main__':
    app.run(debug=True)