interface Logger {
    log: (message) => void;
    error: (message) => void;
}

class ConsoleLogger implements Logger {
    error(message): void {
        console.error(message);
    }

    log(message): void {
        console.log(message);
    }
}

class EmptyLogger implements Logger {
    error(message): void {
    }

    log(message): void {
    }
}

class BackendLogger implements Logger {
    error(message): void {
        this.sendMessage(message, 'error')
    }

    log(message): void {
        this.sendMessage(message, 'info')
    }

    private sendMessage(message: string, type: string) {
        fetch('api/log', {
            method: 'post',
            body: JSON.stringify(
                {
                    message: message,
                    type: type
                }
            ),
        })
    }
}


function generateLogger(customer: string): Logger {
    switch (customer) {
        case 'empty':
            return new EmptyLogger();
        case 'back':
            return new BackendLogger();
        case 'file':
            return new BackendLogger();
        default: {
            return new ConsoleLogger();
        }
    }
}

const logger: Logger = generateLogger('customer');
logger.error(232)
logger.log('init')
