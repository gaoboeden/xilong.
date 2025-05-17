import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Clock, Award, Heart, Star, MapPin, Coffee, 
  Utensils, Wifi, Tv, Car, Wind 
} from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

const About: React.FC = () => {
  useEffect(() => {
    document.title = '酒店介绍 - 锡龙酒店';
  }, []);

  const stats = [
    {
      value: '200+',
      label: '豪华客房',
      icon: <Clock className="w-6 h-6 text-primary-600" />
    },
    {
      value: '4',
      label: '特色餐厅',
      icon: <Utensils className="w-6 h-6 text-primary-600" />
    },
    {
      value: '1000+',
      label: '满意顾客',
      icon: <Users className="w-6 h-6 text-primary-600" />
    },
    {
      value: '50+',
      label: '荣誉奖项',
      icon: <Award className="w-6 h-6 text-primary-600" />
    }
  ];

  const facilities = [
    {
      icon: <Coffee className="w-8 h-8 text-primary-600" />,
      title: '咖啡厅',
      description: '24小时营业的咖啡厅，提供各种饮品和小食。'
    },
    {
      icon: <Utensils className="w-8 h-8 text-primary-600" />,
      title: '餐厅',
      description: '提供中西式美食的高级餐厅，满足您的味蕾。'
    },
    {
      icon: <Wifi className="w-8 h-8 text-primary-600" />,
      title: '高速WiFi',
      description: '覆盖全酒店的高速无线网络，随时保持连接。'
    },
    {
      icon: <Tv className="w-8 h-8 text-primary-600" />,
      title: '智能客房',
      description: '配备智能控制系统的现代化客房，提供便捷体验。'
    },
    {
      icon: <Car className="w-8 h-8 text-primary-600" />,
      title: '接送服务',
      description: '提供机场和车站的专业接送服务，省心便捷。'
    },
    {
      icon: <Wind className="w-8 h-8 text-primary-600" />,
      title: '空气净化',
      description: '全酒店配备高效空气净化系统，提供健康环境。'
    }
  ];

  const milestones = [
    {
      year: '2010',
      title: '锡龙酒店成立',
      description: '锡龙酒店在城市中心正式开业，开启奢华酒店服务的新篇章。'
    },
    {
      year: '2015',
      title: '荣获五星评级',
      description: '经过严格评估，锡龙酒店正式获得五星级酒店认证，标志着服务质量达到国际标准。'
    },
    {
      year: '2018',
      title: '扩建翻新',
      description: '酒店进行全面扩建和翻新，增加了更多豪华客房和设施，提升整体服务水平。'
    },
    {
      year: '2020',
      title: '数字化转型',
      description: '引入智能化管理系统，实现客房智能控制，提升客户体验和运营效率。'
    },
    {
      year: '2023',
      title: '可持续发展',
      description: '启动绿色酒店计划，引入环保设施和措施，减少能源消耗和环境影响。'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
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
              酒店介绍
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-neutral-200 mb-10 max-w-2xl"
            >
              了解锡龙酒店的故事、设施和服务，感受我们对卓越品质的不懈追求。
            </motion.p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle 
                subtitle="我们的故事"
                title="关于锡龙酒店"
                description="锡龙酒店始建于2010年，是一家位于城市中心的五星级豪华酒店，拥有超过200间豪华客房和套房，是商务旅行和休闲度假的理想选择。"
              />
              
              <p className="paragraph mb-6">
                多年来，我们不断追求卓越，致力于为每位宾客提供最优质的服务和舒适的住宿体验。我们的团队由经验丰富的专业人员组成，他们熟悉酒店运营的各个方面，能够满足宾客的各种需求。
              </p>
              
              <p className="paragraph mb-8">
                作为一家负责任的企业，我们也积极参与社区活动，支持当地发展，并实施环保措施，减少对环境的影响。我们相信，只有可持续发展，才能为宾客提供长期的价值和体验。
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" to="/culture">
                  了解文化理念
                </Button>
                <Button variant="outline" to="/contact">
                  联系我们
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="relative h-full">
                <img 
                  src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="锡龙酒店" 
                  className="rounded-lg shadow-lg h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="锡龙酒店" 
                    className="rounded-lg shadow-lg h-full object-cover"
                  />
                </div>
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="锡龙酒店" 
                    className="rounded-lg shadow-lg h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                <p className="text-primary-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Facilities Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle 
            subtitle="酒店设施"
            title="我们的设施与服务"
            description="锡龙酒店提供全方位的设施和服务，满足您在住宿期间的各种需求，让您的体验更加舒适便捷。"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 flex items-start gap-4 hover:shadow-xl transition-shadow"
              >
                <div className="shrink-0">
                  {facility.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-neutral-800">{facility.title}</h3>
                  <p className="text-neutral-600">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle 
                subtitle="地理位置"
                title="便捷的中心位置"
                description="锡龙酒店位于城市商业中心地带，交通便利，周围有众多景点、购物中心和商务区。"
              />
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-neutral-800">酒店地址</h4>
                    <p className="text-neutral-600">北京市朝阳区建国门外大街1号国贸中心</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-neutral-800">距离主要地标</h4>
                    <p className="text-neutral-600">距机场35公里，距火车站10公里，距地铁站500米</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-neutral-800">周边景点</h4>
                    <p className="text-neutral-600">周边有多个著名景点，包括购物中心、博物馆和公园</p>
                  </div>
                </li>
              </ul>
              
              <Button variant="primary" to="/contact">
                获取导航指引
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/592753/pexels-photo-592753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="酒店位置地图" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute flex flex-col items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-white">
                <MapPin className="w-10 h-10 text-primary-600 animate-bounce" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* History Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle 
            subtitle="发展历程"
            title="我们的成长与里程碑"
            description="自成立以来，锡龙酒店经历了多个重要的发展阶段，不断提升服务质量和扩展业务范围。"
            center
          />
          
          <div className="relative mt-16">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-100"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative grid grid-cols-1 md:grid-cols-5 mb-12 ${
                  index % 2 === 0 ? 'md:text-right' : ''
                }`}
              >
                <div className={`md:col-span-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}>
                  <div className={`card p-6 ${index % 2 === 0 ? 'ml-auto mr-0' : 'ml-0 mr-auto'} max-w-md`}>
                    <span className="text-sm font-medium text-primary-600 mb-2 block">{milestone.year}</span>
                    <h3 className="text-xl font-bold mb-3 text-neutral-800">{milestone.title}</h3>
                    <p className="text-neutral-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="md:col-span-1 relative flex justify-center md:order-2">
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary-600 border-4 border-white z-10"></div>
                </div>
                
                <div className={`md:col-span-2 ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/7545960/pexels-photo-7545960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
        ></div>
        <div className="absolute inset-0 bg-primary-900 bg-opacity-90"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              体验锡龙酒店的卓越服务
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg mb-8 text-neutral-300"
            >
              预订您的住宿，享受我们精心打造的豪华体验和贴心服务。
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button 
                variant="primary" 
                to="/contact"
                className="bg-white text-primary-900 hover:bg-neutral-100"
              >
                立即预订
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;