"""empty message

Revision ID: 09b326441e58
Revises: a59eacd4c491
Create Date: 2021-07-20 11:24:31.677367

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '09b326441e58'
down_revision = 'a59eacd4c491'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('user', 'is_active',
               existing_type=sa.BOOLEAN(),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('user', 'is_active',
               existing_type=sa.BOOLEAN(),
               nullable=False)
    # ### end Alembic commands ###