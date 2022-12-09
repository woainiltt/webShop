from django.db import DatabaseError
from rest_framework.views import exception_handler
from rest_framework.response import Response
from rest_framework import status

import logging


logger = logging.getLogger('django')


def custom_exception_handler(exc, context):
    """
    自定义异常处理
    :param exc: 异常类
    :param context: 抛出异常的上下文
    :return: Response响应对象
    """
    response = exception_handler(exc, context)
    if response is None:
        view = context['view']
        if isinstance(exc, DatabaseError):
            # database exception
            logger.error('[%s] %s' % (view, exc))
            response = Response({'message': 'Server inner error'}, status=status.HTTP_506_VARIANT_ALSO_NEGOTIATES)
    return response