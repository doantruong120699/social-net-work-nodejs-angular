import { BaseController } from '~core/controllers/base.controller';
import { ResetPasswordService } from '~users/services/reset-password.service';
import { Body, Controller, HttpCode, HttpStatus, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CheckResetTokenDto } from '../dto/check-reset-token.dto';
import { ResetPasswordDto } from '../dto/reset-password.dto';

@Controller('api/reset-password')
@ApiTags('Reset password')
export class ResetPasswordController extends BaseController {
    constructor(private resetPasswordService: ResetPasswordService) {
        super();
    }

    @Post('check-token')
    @ApiOperation({
        description: 'Check a token is valid'
    })
    @HttpCode(HttpStatus.NO_CONTENT)
    checkToken(@Body() body: CheckResetTokenDto) {
        return this.resetPasswordService.checkToken(body.token);
    }

    @Put()
    @ApiOperation({
        description: 'Change new password'
    })
    @HttpCode(HttpStatus.NO_CONTENT)
    resetPassword(@Body() body: ResetPasswordDto) {
        return this.resetPasswordService.resetPassword(body.password, body.token);
    }
}
