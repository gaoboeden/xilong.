import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Clock, Send, 
  Facebook, Instagram, Twitter, Linkedin 
} from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = '联系我们 - 锡龙酒店';
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 text-primary-600" />,
      title: '地址',
      details: [
        '北京市朝阳区建国门外大街1号',
        '国贸中心，100004'
      ]
    },
    {
      icon: <Phone className="w-5 h-5 text-primary-600" />,
      title: '电话',
      details: [
        '+86 010-1234-5678',
        '+86 010-8765-4321'
      ]
    },
    {
      icon: <Mail className="w-5 h-5 text-primary-600" />,
      title: '邮箱',
      details: [
        'info@xilonghotel.com',
        'booking@xilonghotel.com'
      ]
    },
    {
      icon: <Clock className="w-5 h-5 text-primary-600" />,
      title: '营业时间',
      details: [
        '周一至周日',
        '全天24小时服务'
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              联系我们
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-neutral-200 mb-10 max-w-2xl"
            >
              无论您有任何疑问、建议或预订需求，都可以通过以下方式联系我们，我们将竭诚为您服务。
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-neutral-800">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-neutral-600">{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form & Map */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle 
                subtitle="联系表单"
                title="发送消息给我们"
                description="填写以下表单，我们的客服团队将尽快与您联系。无论是预订咨询、服务反馈还是合作洽谈，我们都将认真对待您的每一条信息。"
              />
              
              <form onSubmit={handleSubmit} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="form-label">姓名</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="请输入您的姓名" 
                      className="form-input"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label">邮箱</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="请输入您的邮箱" 
                      className="form-input"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="form-label">电话</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="请输入您的电话号码" 
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="form-label">主题</label>
                    <select 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-input"
                      required
                    >
                      <option value="">请选择主题</option>
                      <option value="booking">预订咨询</option>
                      <option value="feedback">服务反馈</option>
                      <option value="cooperation">合作洽谈</option>
                      <option value="other">其他</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="form-label">消息内容</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="请输入您的消息内容" 
                    className="form-input min-h-[150px]"
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <Button 
                    type="submit"
                    variant="primary"
                    className="flex items-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
                        <span>提交中...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>发送消息</span>
                      </>
                    )}
                  </Button>
                  
                  {isSubmitted && (
                    <div className="ml-4 text-green-600 font-medium">
                      消息已发送，我们将尽快与您联系！
                    </div>
                  )}
                </div>
              </form>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle 
                subtitle="地理位置"
                title="酒店位置"
                description="锡龙酒店位于北京市中心地带，交通便利，周边设施完善，是您商务和休闲的理想选择。"
              />
              
              <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/592753/pexels-photo-592753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="锡龙酒店地图"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              
              <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-neutral-800">交通指南</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-primary-600 text-sm font-bold">1</span>
                    </div>
                    <p className="text-neutral-600">
                      <span className="font-medium text-neutral-800">公共交通：</span> 地铁1号线、2号线国贸站下车，B出口步行5分钟可达。
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-primary-600 text-sm font-bold">2</span>
                    </div>
                    <p className="text-neutral-600">
                      <span className="font-medium text-neutral-800">自驾：</span> 导航至"北京市朝阳区建国门外大街1号国贸中心"，酒店提供免费停车服务。
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-primary-600 text-sm font-bold">3</span>
                    </div>
                    <p className="text-neutral-600">
                      <span className="font-medium text-neutral-800">机场：</span> 距首都国际机场约35公里，乘坐机场快线可直达国贸站；或预约酒店接机服务。
                    </p>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Booking Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-sm font-medium uppercase tracking-wider mb-2 text-primary-200">
                预订服务
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                立即预订您的住宿
              </h2>
              
              <p className="text-lg mb-8 text-primary-100">
                通过我们的在线预订系统，轻松预订您的住宿。您也可以通过电话或邮件联系我们的预订部门，我们的团队将为您提供个性化的预订服务。
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="primary" 
                  className="bg-white text-primary-700 hover:bg-neutral-100"
                >
                  在线预订
                </Button>
                <a 
                  href="tel:+8601012345678" 
                  className="inline-flex items-center gap-2 text-white hover:text-primary-200 transition-colors"
                >
                  <Phone size={18} />
                  <span>+86 010-1234-5678</span>
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg text-neutral-800"
            >
              <h3 className="text-xl font-bold mb-4">快速预订查询</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="quick-name" className="form-label">姓名</label>
                  <input 
                    type="text" 
                    id="quick-name" 
                    placeholder="请输入您的姓名" 
                    className="form-input"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="check-in-date" className="form-label">入住日期</label>
                    <input 
                      type="date" 
                      id="check-in-date" 
                      className="form-input"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="check-out-date" className="form-label">退房日期</label>
                    <input 
                      type="date" 
                      id="check-out-date" 
                      className="form-input"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="guests" className="form-label">客人数量</label>
                    <select id="guests" className="form-input" required>
                      <option value="">请选择</option>
                      <option value="1">1位客人</option>
                      <option value="2">2位客人</option>
                      <option value="3">3位客人</option>
                      <option value="4">4位客人</option>
                      <option value="5+">5位或更多</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="room-type" className="form-label">房间类型</label>
                    <select id="room-type" className="form-input" required>
                      <option value="">请选择</option>
                      <option value="standard">标准客房</option>
                      <option value="deluxe">豪华客房</option>
                      <option value="suite">套房</option>
                      <option value="executive">行政客房</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="special-requests" className="form-label">特殊要求</label>
                  <textarea 
                    id="special-requests" 
                    placeholder="如有任何特殊要求，请在此处说明" 
                    className="form-input min-h-[80px]"
                  ></textarea>
                </div>
                
                <Button variant="primary" type="submit" className="w-full">
                  提交查询
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle 
            subtitle="常见问题"
            title="解答您的疑问"
            description="以下是我们的客人经常咨询的问题，如果您有其他疑问，欢迎随时联系我们。"
            center
          />
          
          <div className="max-w-3xl mx-auto mt-12 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card p-6"
            >
              <h3 className="text-lg font-bold mb-2 text-neutral-800">入住和退房时间是什么时候？</h3>
              <p className="text-neutral-600">
                标准入住时间为下午2点，退房时间为中午12点。如需提前入住或延迟退房，请提前与我们联系，我们将尽力安排（可能收取额外费用）。
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card p-6"
            >
              <h3 className="text-lg font-bold mb-2 text-neutral-800">酒店提供哪些服务和设施？</h3>
              <p className="text-neutral-600">
                我们提供24小时前台服务、房间服务、健身中心、游泳池、SPA、多个餐厅和酒吧、商务中心、会议设施、免费WiFi和免费停车等服务和设施。
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card p-6"
            >
              <h3 className="text-lg font-bold mb-2 text-neutral-800">如何取消或修改预订？</h3>
              <p className="text-neutral-600">
                您可以通过我们的网站、电话或邮件取消或修改预订。请注意，不同的预订类型可能有不同的取消政策，建议您在预订时查看具体条款。
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card p-6"
            >
              <h3 className="text-lg font-bold mb-2 text-neutral-800">酒店是否提供接送机服务？</h3>
              <p className="text-neutral-600">
                是的，我们提供机场接送服务，请在预订时或至少提前24小时与我们联系安排，服务费用将根据距离和时间而定。
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Social Media */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold mb-4 text-neutral-800"
            >
              关注我们的社交媒体
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-neutral-600 mb-8 max-w-2xl mx-auto"
            >
              关注我们的社交媒体账号，了解最新优惠和活动信息，分享您在锡龙酒店的美好体验。
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center gap-4"
            >
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white hover:bg-primary-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white hover:bg-primary-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white hover:bg-primary-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white hover:bg-primary-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;