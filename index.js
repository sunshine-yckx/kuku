import chalk from 'chalk'
import fs from 'node:fs'
import { appsPath, pluginVer } from './data/system/pluginConstants.js'
import initAutoTask from './model/autoTask.js'

logger.info(chalk.rgb(253, 235, 255)('-----------(≧∇≦)ﾉ-----------'))
logger.info(chalk.rgb(134, 142, 204)(`[库洛插件] V${pluginVer} 初始化中~`))
logger.info(chalk.rgb(253, 235, 255)('----------------------------'))

const files = fs.readdirSync(appsPath).filter((file) => file.endsWith('.js'))

let ret = []

files.forEach((file) => {
  ret.push(import(`./apps/${file}`))
})

ret = await Promise.allSettled(ret)

let apps = {}
for (let i in files) {
  let name = files[i].replace('.js', '')

  if (ret[i].status !== 'fulfilled') {
    logger.error(`[库洛插件] 载入模块错误：${logger.red(name)}`)
    logger.error(ret[i].reason)
    continue
  } else {
    logger.info(chalk.rgb(134, 142, 204)(`[库洛插件] 载入模块成功：${name}`))
  }
  apps[name] = ret[i].value[Object.keys(ret[i].value)[0]]
}
logger.info(chalk.rgb(134, 142, 204)(`[库洛插件] 载入模块完成!`))
export { apps }

logger.info(chalk.rgb(134, 142, 204)(`[库洛插件] 载入定时任务中...`))
initAutoTask()

logger.info(chalk.rgb(134, 142, 204)(`[库洛插件] 载入定时任务完成!`))
