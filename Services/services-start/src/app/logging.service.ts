
export class LoggingService {
  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }

  logNewServer(name: string, status: string) {
    console.log(`A new server ${name} was created with status: ${status}`)
  }
}
